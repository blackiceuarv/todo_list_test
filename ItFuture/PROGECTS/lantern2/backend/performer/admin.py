from django.contrib import admin
from django.utils.html import format_html
from .models import Performer, Participant, PerformerGallery, Video


class ParticipantInline(admin.TabularInline):
    model = Participant
    extra = 1


class PerformerGalleryInline(admin.TabularInline):
    model = PerformerGallery
    extra = 1


class VideoInline(admin.TabularInline):
    model = Video
    extra = 1


@admin.register(Performer)
class PerformerAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at', 'display_logo']
    search_fields = ['name']
    inlines = [ParticipantInline, PerformerGalleryInline, VideoInline]

    # fieldsets = [
    #     (None, {'fields': ['name', 'slug']}),
    #     ('Images', {'fields': ['display_logo', 'logo', 'poster']}),
    #     ('Description', {'fields': ['description']}),
    #     ('Support', {'fields': ['bank_to_support']}),
    #     ('Links', {'fields': ['website', 'telegram', 'instagram', 'youtube', 'tiktok']}),
    #     ('Dates', {'fields': ['created_at']}),
    # ]
    readonly_fields = ['display_logo', 'created_at']

    def display_logo(self, obj):
        return format_html('<img src="{}" alt="Logo" height="50">'.format(obj.logo.url))
    display_logo.short_description = 'Logo'


@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    list_display = ['name', 'performer']
    search_fields = ['name']


@admin.register(PerformerGallery)
class PerformerGalleryAdmin(admin.ModelAdmin):
    list_display = ['image', 'performer']
    search_fields = ['performer__name']


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['youtube_url', 'performer']
    search_fields = ['performer__name']