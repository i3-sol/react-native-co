from django.db import models

# Reference: ED19_023_テーブル定義書.docx
class Inquiry(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    inquiry_content = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'inquiries'
