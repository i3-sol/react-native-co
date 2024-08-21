from django.contrib import admin
from .models import Users

@admin.register(Users)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('email', 'full_name', 'date_of_birth')  # Adjust to your fields
