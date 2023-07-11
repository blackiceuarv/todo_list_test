from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UnregisteredUser
from django.utils.safestring import mark_safe

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'first_name', 'last_name', 'is_staff', 'get_image']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'phone', 'avatar')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    search_fields = ['email', 'first_name', 'last_name']
    ordering = ['email']
    readonly_fields = ('get_image',)

    def get_image(self, obj):
        if obj.avatar:
            return mark_safe(f'<img src={obj.avatar.url} width="48" height="48">')
        return mark_safe(f'')

    get_image.short_description = 'Avatar'

@admin.register(UnregisteredUser)
class UnregisteredUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name')
    search_fields = ('email', 'first_name', 'last_name')

admin.site.register(User, CustomUserAdmin)



