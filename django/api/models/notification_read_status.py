from django.db import models
from .notification import Notification

# Reference: ED19_029_テーブル定義書.docx
class NotificationReadStatus(models.Model):
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    is_read_flag = models.BooleanField(default=False)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'notification_read_statuses'
