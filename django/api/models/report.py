from django.db import models


# Reference: ED19_024_テーブル定義書.docx
class Report(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    report_image = models.CharField(max_length=100)
    report_reason = models.CharField(max_length=500, blank=True, null=True)
    report_detail = models.CharField(max_length=1000, blank=True, null=True)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'reports'
