from django.db import models

# Reference: ED19_009_テーブル定義書.docx
class EventChatStoreHosted(models.Model):
    store = models.ForeignKey('Store', on_delete=models.CASCADE)
    prefecture = models.ForeignKey('Prefecture', on_delete=models.CASCADE)
    event_chat_image1 = models.CharField(max_length=100, null=True, blank=True)
    event_chat_image2 = models.CharField(max_length=100, null=True, blank=True)
    event_chat_image3 = models.CharField(max_length=100, null=True, blank=True)
    event_chat_image4 = models.CharField(max_length=100, null=True, blank=True)
    event_chat_image5 = models.CharField(max_length=100, null=True, blank=True)
    event_chat_name = models.CharField(max_length=45)
    event_chat_introduction = models.CharField(max_length=800)
    event_chat_recruitment_start_on = models.DateField()
    event_chat_recruitment_end_on = models.DateField()
    event_chat_deadlines_on = models.DateField()
    event_chat_billing_setting = models.BooleanField(default=False)
    event_chat_contact = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'event_chat_store_hosteds'
