from django.db import models
from autoslug import AutoSlugField
from app.services.generate_slug import generate_slug
from django.core.validators import FileExtensionValidator, MinValueValidator, MaxValueValidator
from performer.models import Performer

def upload_to_event_image(instance, filename):
    return f'event/images/{filename}'.format(filename=filename)

def upload_to_event_poster(instance, filename):
    return f'event/poster/{filename}'.format(filename=filename)

class Event(models.Model):
    slug = AutoSlugField(populate_from='name', unique=True, slugify=generate_slug)
    name = models.TextField(help_text='Назва події')
    performers = models.ManyToManyField(Performer, related_name='events', blank=True, help_text='Учасники події')
    description = models.TextField(blank=True, null=True, help_text='Опис події')
    image = models.ImageField(verbose_name="Логотип події", upload_to=upload_to_event_image,
                              validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])],
                              blank=False, null=True, help_text='Логотип події (jpg, jpeg, png)')
    poster = models.ImageField(verbose_name="Постер події", upload_to=upload_to_event_poster,
                               validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])],
                               blank=True, null=True, help_text='Постер події (jpg, jpeg, png)')
    is_show = models.BooleanField(default=True, blank=True, null=True, help_text='Чи показувати подію')
    charity = models.BooleanField(default=False, blank=True, null=True, help_text='Відмітка про благодійність')
    start_time = models.DateTimeField(blank=False, null=True, help_text='Час початку події')
    price = models.IntegerField(blank=True, null=True, validators=[MinValueValidator(0), MaxValueValidator(9999)], help_text='Ціна події (від 0 до 9999), якщо вхід вільний залишити пусте поле')
    location = models.CharField(max_length=255, blank=True, null=True, help_text='Адреса проведення події')
    address =  models.CharField(max_length=255, blank=True, null=True, help_text='Місце проведення події', default='Арт-простір “Ліхтар”')
    location_iframe = models.CharField(max_length=500, blank=True, null=True, help_text='Посилання на Google Maps < iframe src="https:...')
    genre = models.CharField(max_length=255, blank=True, null=True, help_text='Жанр події')
    # google_calendar = 

    def get_booking_count(self):
        return self.bookings.count()
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Події"
    
    