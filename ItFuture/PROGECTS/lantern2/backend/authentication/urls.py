from django.urls import path, include

from django.urls import path
from djoser import views as djoser_views
from rest_framework_simplejwt import views as jwt_views
from .views import TokenVerifyView


urlpatterns = [
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.urls')),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
