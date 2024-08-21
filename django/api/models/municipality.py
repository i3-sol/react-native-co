from django.db import models
from .prefecture import Prefecture

# Reference: ED19_040_テーブル定義書.docx
class Municipality(models.Model):
    prefecture = models.ForeignKey(Prefecture, on_delete=models.CASCADE)
    municipality_name = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'municipalities'
