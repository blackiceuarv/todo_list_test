from rest_framework import serializers

from authentication.serializers import UserSmallSerializer
from .models import Event, Booking


class EventSerializer(serializers.ModelSerializer):
    booking_count = serializers.SerializerMethodField()

    def get_booking_count(self, obj):
        return obj.get_booking_count()

    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'image', 'poster', "charity", 'start_time', 'price', 'location', 'address', 'genre', 'booking_count', 'slug']


class BookingSerializer(serializers.ModelSerializer):   
    user = UserSmallSerializer(read_only=True)
    # event = EventSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'user', 'status']
