from django.db import models

# Reference: ED19_027_テーブル定義書.docx
class Notification(models.Model):
    notification_type = models.SmallIntegerField()
    notification_title = models.CharField(max_length=100)
    notification_content = models.CharField(max_length=500)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'notifications'
