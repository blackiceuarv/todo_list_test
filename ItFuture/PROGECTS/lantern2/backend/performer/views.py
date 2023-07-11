from rest_framework import viewsets
from .models import Performer
from .serializers import PerformerSerializer

class PerformerViewSet(viewsets.ModelViewSet):
    queryset = Performer.objects.all()
    serializer_class = PerformerSerializer
