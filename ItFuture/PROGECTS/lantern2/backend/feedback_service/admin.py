from django.contrib import admin
from .models import Feedback

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')
    list_display_links = ('name', 'email')
    search_fields = ('name', 'email')
    list_filter = ('name', 'email')

admin.site.register(Feedback, FeedbackAdmin)
