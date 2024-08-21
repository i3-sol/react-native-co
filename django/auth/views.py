from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializer import UserSerializer, ChangePasswordSerializer

class ObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

class ChangePasswordView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    # permission_classes = (permissions.IsAuthenticated,)

    serializer_class = ChangePasswordSerializer

    def get_object(self):
        return self.request.user
