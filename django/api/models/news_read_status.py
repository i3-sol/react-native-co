from django.db import models
from .news import News

# Reference: ED19_028_テーブル定義書.docx
class NewsReadStatus(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    is_read_flag = models.BooleanField(default=False)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'news_read_statuses'
