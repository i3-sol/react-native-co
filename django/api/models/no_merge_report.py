from django.db import models
from .merge_chat_room import MergeChatRoom

# Reference: ED19_021_テーブル定義書.docx
class NoMergeReport(models.Model):
    merge_chat_room = models.ForeignKey('MergeChatRoom', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    no_merge_report_status = models.SmallIntegerField()
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'no_merge_reports'
