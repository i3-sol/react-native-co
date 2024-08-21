from django.urls import path
from user_auth.views import RegisterView, TokenObtainPairView, ChangePasswordView, LoginAPIView
from rest_framework_simplejwt.views import TokenRefreshView

auth_urlpattern = [
    path("login/", LoginAPIView.as_view(), name="token_obtain_pair"),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_obtain_pair"),
    path("register/", RegisterView.as_view(), name="auth_register"),
    path("change_password/<str:pk>/", ChangePasswordView.as_view(), name="change_password")
]