from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import Token
from django.contrib.auth import authenticate, login

from .models import Users

class ObtainTokenPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        # token = super(ObtainTokenPairSerializer, cls).get_token(user)

        # token["email"] = user.email
        # return token
    
        token = super(ObtainTokenPairSerializer, cls).get_token(user)

        token["username"] = user.username
        return token
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if not email or not password:
            raise serializers.ValidationError("Email and password are required.")

        user = authenticate(email=email, password=password)
        if user is None:
            raise serializers.ValidationError("Invalid credentials.")

        attrs['user'] = user
        return attrs
class UserRegisterSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        if attrs.get("password") != attrs.get("conf_password"):
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Users(
            email=validated_data.get('email'),
            full_name=validated_data.get('full_name'),
            date_of_birth=validated_data.get('date_of_birth'),
            address=validated_data.get('address'),
            icon=validated_data.get('icon'),
            photograph=validated_data.get('photograph'),
            nickname=validated_data.get('nickname'),
            sex=validated_data.get('sex'),
            year=validated_data.get('year'),
            prefecture_name=validated_data.get('prefecture_name'),
            occupation=validated_data.get('occupation'),
            self_information=validated_data.get('self_information'),
            height=validated_data.get('height'),
            body_type=validated_data.get('body_type'),
            married=validated_data.get('married'),
            highest_level_of_education=validated_data.get('highest_level_of_education'),
            school_name=validated_data.get('school_name'),
            annual_income=validated_data.get('annual_income'),
            telephone_number=validated_data.get('telephone_number'),
        )
        user.password = make_password(password)
        user.save()
        return user

    class Meta:
        model = Users
        fields = "__all__"
class ChangePasswordSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    conf_password = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Users
        fields = ['password', 'conf_password', 'old_password'] 
    def validate(self, attrs):
        if attrs.get("password") != attrs.get("conf_password"):
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    
    def validate_old_password(self, value):
        user = self.context["request"].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value
    
    def update(self, instance, validated_data):
        instance.set_password(validated_data["password"])
        instance.save()
        print(instance)
        return instance