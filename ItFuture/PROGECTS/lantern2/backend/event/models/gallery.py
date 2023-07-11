from django.db import models
from django.core.validators import FileExtensionValidator
from .event import Event

def upload_to_gallery_image(instance, filename):
    return f'event/gallery/{filename}'.format(filename=filename)

class Gallery(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, help_text='Подія', related_name='gallery',)
    image = models.ImageField(
        blank=True,
        verbose_name="Фото",
        help_text='Фото (jpg, jpeg, png)',
        upload_to=upload_to_gallery_image,
        validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])]
    )
    youtube_url = models.URLField(
        max_length=200,
        blank=True,
        null=True,
        help_text='Посилання на відео на YouTube'
    )

    def __str__(self):
        return f'Gallery for {self.event}'
    
    class Meta:
        verbose_name_plural = "Галерея"
