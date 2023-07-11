from rest_framework import viewsets

from authentication.serializers import UserSerializer
from .models import Event, Booking
from .serializers import EventSerializer, BookingSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
import django_filters


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.filter(is_show=True)
    serializer_class = EventSerializer
    lookup_field = 'slug'
    basename = 'event'

    @action(detail=True, methods=['get'])
    def users(self, request, pk=None):
        event = self.get_object()
        bookings = event.bookings.select_related('user', 'unregistered_user')
        users = []
        for booking in bookings:
            if booking.user:
                users.append(booking.user)
            if booking.unregistered_user:
                users.append(booking.unregistered_user)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class BookingFilter(django_filters.FilterSet):
    event = django_filters.NumberFilter(field_name='event__id')

    class Meta:
        model = Booking
        fields = ['event']

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    filterset_class = BookingFilter
