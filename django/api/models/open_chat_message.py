from django.db import models
from .open_chat import OpenChat

# Reference: ED19_004_テーブル定義書.docx
class OpenChatMessage(models.Model):
    open_chat = models.ForeignKey(OpenChat, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    message_content = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'open_chat_messages'
