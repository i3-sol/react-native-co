from django.db import models


# Reference: ED19_018_テーブル定義書.docx
class TemplateMaster(models.Model):
    template_type = models.CharField(max_length=255)
    template_content = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'template_masters'
