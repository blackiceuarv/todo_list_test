from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Додайте поле пароля

    class Meta:
        model = User
        fields = ['id', 'last_name', 'first_name', 'email', 'phone', 'avatar', 'password','created_at', 'updated_at']


class UserSmallSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'last_name', 'first_name', 'email', 'phone', 'avatar']