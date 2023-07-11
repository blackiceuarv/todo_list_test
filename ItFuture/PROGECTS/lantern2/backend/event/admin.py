from django.contrib import admin
from django.utils.html import format_html
from .models import Event, Booking, Gallery
from authentication.models import UnregisteredUser



class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 1

class BookingInline(admin.TabularInline):
    model = Booking
    extra = 1

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'start_time', 'is_show', 'get_booking_count', 'preview_image']
    list_display_links = ('name', 'start_time', 'is_show', 'get_booking_count', 'preview_image')
    list_filter = ('is_show',)
    search_fields = ('name', 'description')
    inlines = [GalleryInline, BookingInline]

    def get_booking_count(self, obj):
        return obj.get_booking_count()
    get_booking_count.short_description = 'Кількість гостей'

    def preview_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" height="50px" />', obj.image.url)
        return None
    preview_image.short_description = 'Прев\'ю логотипу події'


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('event', 'preview_image', 'youtube_url')
    list_filter = ('event',)
    search_fields = ('event__name', 'youtube_url')

    def preview_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" height="50px" />', obj.image.url)
        return None
    preview_image.short_description = 'Прев\'ю фото'


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'unregistered_user', 'event', 'status')
    list_display_links = ('user', 'unregistered_user', 'event', 'status')
    search_fields = ('user__email', 'user__first_name', 'user__last_name', 'unregistered_user__email', 'event__name')

