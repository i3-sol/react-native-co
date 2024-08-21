from django.db import models
from .event_chat_store_hosted import EventChatStoreHosted

# Reference: ED19_011_テーブル定義書.docx
class EventChatStoreRequest(models.Model):
    event_chat_store_hosted = models.ForeignKey(EventChatStoreHosted, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    event_chat_request_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'event_chat_store_requests'
