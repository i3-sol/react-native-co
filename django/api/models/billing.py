from django.db import models
from .user import User

# Reference: ED19_020_テーブル定義書.docx
class Billing(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    billing_amount = models.IntegerField(default=0)
    billing_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'billings'
