from django.db import models
from .merge_chat_room import MergeChatRoom

# Reference: ED19_016_テーブル定義書.docx
class MergeChatMessage(models.Model):
    merge_chat_room = models.ForeignKey(MergeChatRoom, on_delete=models.CASCADE)
    merge_chat_message_content = models.CharField(max_length=1000)
    merge_chat_is_read = models.BooleanField(default=False)
    merge_chat_send_on = models.DateField()
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'merge_chat_messages'
