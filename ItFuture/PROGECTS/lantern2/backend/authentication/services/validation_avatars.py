from django.core.exceptions import ValidationError
from PIL import Image

def validate_image_size(image):
    max_size = 20 * 1024 * 1024

    if image.size > max_size:
        raise ValidationError(f"Розмір зображення повинен бути не більше {max_size} байт")

def validate_image_format(image):
    img = Image.open(image)

    if not img.format.lower() in ['jpeg', 'png']:
        raise ValidationError("Допустимі формати зображення: JPEG, PNG")

def upload_user_avatar(instance, filename):
    return f'user/avatar/{filename}'