from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from drf_yasg.views import get_schema_view
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Feedback
from django.core.exceptions import ValidationError


schema_view = get_schema_view(
   openapi.Info(
       title="Feedback API",
       default_version='v1',
   ),
   public=True,
)

@swagger_auto_schema(methods=['post'], request_body=openapi.Schema(
   type=openapi.TYPE_OBJECT,
   properties={
       'name': openapi.Schema(type=openapi.TYPE_STRING, description="Ім'я"),
       'email': openapi.Schema(type=openapi.TYPE_STRING, description='Електронна пошта'),
       'message': openapi.Schema(type=openapi.TYPE_STRING, description='Повідомлення'),
   },
   required=['name', 'email', 'message'],
))
@api_view(['POST'])
def feedback_view(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    feedback = Feedback(name=name, email=email, message=message)

    try:
        feedback.full_clean()
        feedback.save()
    except ValidationError as e:
        return Response({'error': 'Please check form fields'}, status=400)

    return Response({'success': True})
