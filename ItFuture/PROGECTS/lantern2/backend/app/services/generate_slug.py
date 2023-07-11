from unidecode import unidecode
from autoslug import AutoSlugField
from django.utils.text import slugify

def generate_slug(value):
    slug = slugify(unidecode(value), allow_unicode=True)
    return slug