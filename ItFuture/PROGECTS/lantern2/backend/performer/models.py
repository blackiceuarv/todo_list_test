from autoslug import AutoSlugField
from django.db import models
from django.core.validators import FileExtensionValidator
from app.services.generate_slug import generate_slug


def upload_performer_image(instance, filename):
    return f'performer/images/{filename}'.format(filename=filename)

def upload_performer_poster(instance, filename):
    return f'performer/poster/{filename}'.format(filename=filename)

class Performer(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = AutoSlugField(populate_from='name', unique=True, slugify=generate_slug)
    logo = models.ImageField(upload_to=upload_performer_image, validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])], help_text='Зображення виконавця')
    poster = models.ImageField(blank=True, null=True, upload_to=upload_performer_poster, validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])], help_text='Постер виконавця')
    description = models.TextField(blank=True, null=True, help_text='Опис виконавця')
    bank_to_support = models.URLField(blank=True, help_text='Посилання на підтримку виконавця')
    created_at = models.DateTimeField(auto_now_add=True)
    website = models.URLField(blank=True, help_text='Посилання на веб-сайт виконавця')
    telegram = models.URLField(blank=True, null=True, help_text='Посилання на Telegram')
    instagram = models.URLField(blank=True, null=True, help_text='Посилання на Instagram')
    youtube = models.URLField(blank=True, null=True, help_text='Посилання на YouTube')
    tiktok = models.URLField(blank=True, null=True, help_text='Посилання на TikTok')

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Артист/колектив"
    

def upload_participant_photo(instance, filename):
    return f'performer/participant/{filename}'.format(filename=filename)

class Participant(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to=upload_participant_photo, validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])], help_text='Фото учасника')
    performer = models.ForeignKey(Performer, on_delete=models.CASCADE, related_name='participants')

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Учасники колективу"

class PerformerGallery(models.Model):
    image = models.ImageField(blank=False, upload_to='performer/photos', validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])], help_text='Фото')
    performer = models.ForeignKey(Performer, on_delete=models.CASCADE, related_name='photos')

    class Meta:
        verbose_name_plural = "Фото"

class Video(models.Model):
    youtube_url = models.URLField(blank=False, help_text='Посилання на відео YouTube')
    performer = models.ForeignKey(Performer, on_delete=models.CASCADE, related_name='videos')

    class Meta:
        verbose_name_plural = "Відео на YouTube"