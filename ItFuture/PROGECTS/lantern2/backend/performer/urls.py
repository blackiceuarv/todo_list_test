from django.urls import path, include
from rest_framework import routers
from .views import PerformerViewSet

router = routers.DefaultRouter()
router.register(r'performers', PerformerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
