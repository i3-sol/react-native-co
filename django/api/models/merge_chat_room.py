from django.db import models


# Reference: ED19_015_テーブル定義書.docx
class MergeChatRoom(models.Model):
    meet_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='merge_chat_meet_rooms')
    remeet_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='merge_chat_remeet_rooms')
    merge_chat_join_on = models.DateField(null=True, blank=True)
    merge_chat_status = models.SmallIntegerField()
    is_under23_flag = models.BooleanField(default=False)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'merge_chat_rooms'
