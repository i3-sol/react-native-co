from django.db import models
from .open_chat import OpenChat

# Reference: ED19_030_テーブル定義書.docx
class User(models.Model):
    #open_chat = models.ForeignKey('OpenChat', on_delete=models.CASCADE)
    user_name = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.user_name

    class Meta:
        db_table = 'users'