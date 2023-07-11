from django.contrib import admin
from django.urls import path
from .services.swagger_settings import urlpatterns as doc_urls
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('authentication.urls')),
    path('', include('event.urls')),
    path('', include('performer.urls')),
    path('', include('feedback_service.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
