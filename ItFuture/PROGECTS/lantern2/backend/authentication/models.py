from django.db import models
import jwt
from datetime import datetime, timedelta
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid
from django.core.validators import FileExtensionValidator
from PIL import Image

from .services.validation_avatars import upload_user_avatar, validate_image_format, validate_image_size

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    last_name = models.CharField(max_length=24, blank=True, help_text='Прізвище користувача')
    first_name = models.CharField(max_length=24, blank=True, help_text='Ім\'я користувача')
    telegram_nick_name = models.CharField(max_length=24, blank=True, help_text='Нікнейм у Telegram')
    instagram_nick_name = models.CharField(max_length=24, blank=True, help_text='Нікнейм у Instagram')
    email = models.EmailField(unique=True, help_text='Email користувача')
    phone = models.CharField(max_length=20, blank=True, null=True, help_text='Номер телефону користувача')
    avatar = models.ImageField(
        upload_to=upload_user_avatar,
        blank=True,
        null=True,
        validators=[validate_image_size, validate_image_format],
        help_text='Аватар користувача (розмір до 20 МБ, формат JPEG або PNG)'
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Користувачі"

    @property
    def token(self):
        dt = datetime.now() + timedelta(days=60)
        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')


class UnregisteredUser(models.Model):
    email = models.EmailField(blank=True, null=True, help_text='Email користувача')
    phone = models.CharField(max_length=20, blank=True, null=True, help_text='Номер телефону користувача')
    first_name = models.CharField(max_length=150, blank=True, null=True, help_text='Ім\'я користувача')
    last_name = models.CharField(max_length=150, blank=True, null=True, help_text='Прізвище користувача')

    def __str__(self):
        return f'{self.email} - {self.first_name} - {self.last_name}'

    class Meta:
        verbose_name_plural = "Без реєстрації"