from django.db import models

from utils.choices import (
    OCCUPATION_CHOICES,
    BODY_TYPE_CHOICES,
    MARRIED_CHOICES,
    HIGHEST_EDUCATION_CHOICES
)
from django.db import models

class Users(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    conf_password = models.CharField(max_length=128)
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField() 
    address = models.CharField(max_length=255)
    icon = models.FileField(upload_to='icons/')
    photograph = models.ImageField(upload_to='photos/', null=True, blank=True)
    nickname = models.CharField(max_length=255)
    sex = models.CharField(
        max_length=12,
        choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')],
        default='O'
    )
    year = models.DateField()
    prefecture_name = models.CharField(max_length=255)
    occupation = models.CharField(max_length=12, choices=OCCUPATION_CHOICES)
    self_information = models.TextField()
    height = models.CharField(max_length=50, blank=True)
    body_type = models.CharField(max_length=12, choices=BODY_TYPE_CHOICES, blank=True, null=True)
    married = models.CharField(max_length=12, choices=MARRIED_CHOICES)
    highest_level_of_education = models.CharField(max_length=12, choices=HIGHEST_EDUCATION_CHOICES, blank=True, null=True)
    school_name = models.CharField(max_length=255, blank=True)
    annual_income = models.CharField(max_length=50, blank=True)
    telephone_number = models.CharField(max_length=20, blank=True)

    class Meta:
        app_label = 'auth'