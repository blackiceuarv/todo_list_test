from django.db import models
from django.conf import settings
from .event import Event
from .gallery import Gallery
from authentication.models import UnregisteredUser
from django.core.exceptions import ValidationError

class Booking(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        help_text='Зареєстрований користувач'
    )
    unregistered_user = models.ForeignKey(
        UnregisteredUser,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        help_text='Користувач, який не зареєстрований'
    )
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='bookings')
    status = models.BooleanField(default=False, blank=True, null=True, help_text='Відмітка про прибуття')

    class Meta:
        unique_together = ('user', 'event')
        verbose_name_plural = "Бронювання"


    def clean(self):
        if self.user and self.unregistered_user:
            raise ValidationError("Користувач не може бути одночасно зареєстрованим і незареєстрованим")
        
    def __str__(self):
        if self.user:
            return f'{self.user} - {self.event}'
        elif self.unregistered_user:
            return f'{self.unregistered_user.email} - {self.event}'
        else:
            return f'Unassigned Booking - {self.event}'
