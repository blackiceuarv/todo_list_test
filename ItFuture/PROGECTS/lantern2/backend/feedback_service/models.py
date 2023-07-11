from django.db import models
from django.core.validators import MinLengthValidator, EmailValidator, MaxLengthValidator
from django.core.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status

class Feedback(models.Model):

    name = models.CharField(max_length=100, validators=[MinLengthValidator(2)], help_text="Ім'я", verbose_name="Ім'я")

    email = models.EmailField(validators=[EmailValidator()], help_text="Електронна пошта", verbose_name="Електронна пошта")

    message = models.TextField(validators=[MinLengthValidator(10), MaxLengthValidator(500)], help_text="Повідомлення (максимум 500 символів)", verbose_name="Повідомлення")


    def save(self, *args, **kwargs):
        try:
            self.full_clean() 
            super().save(*args, **kwargs)
        except ValidationError as e:
            error_message = ", ".join(e.messages)
            return Response({'error': error_message}, status=status.HTTP_400_BAD_REQUEST)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Відгуки"
