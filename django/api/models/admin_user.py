from django.db import models


# Reference: ED19_034_テーブル定義書.docx
class AdminUser(models.Model):
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)  # Note: Remember to hash passwords
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'admin_users'
