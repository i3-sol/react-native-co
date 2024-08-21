from django.db import models
from .event_chat_store_hosted import EventChatStoreHosted

# Reference: ED19_014_テーブル定義書.docx
class EventChatUserMessage(models.Model):
    event_chat_user_hosted = models.ForeignKey(EventChatUserHosted, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    event_chat_message_content = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'event_chat_user_messages'

