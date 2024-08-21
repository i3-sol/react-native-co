from django.db import models
from .now_room import NowRoom

# Reference: ED19_008_テーブル定義書.docx
class NowMessage(models.Model):
    nows_room = models.ForeignKey(NowRoom, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    nows_message_content = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'now_messages'
