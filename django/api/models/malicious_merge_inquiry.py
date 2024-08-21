from django.db import models
from .no_merge_report import NoMergeReport

# Reference: ED19_022_テーブル定義書.docx
class MaliciousMergeInquiry(models.Model):
    no_merge_report = models.ForeignKey(NoMergeReport, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    malicious_merge_inquiry_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'malicious_merge_inquiries'
