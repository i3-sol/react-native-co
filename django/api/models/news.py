from django.db import models

# Reference: ED19_026_テーブル定義書.docx
class News(models.Model):
    region = models.ForeignKey('Region', on_delete=models.CASCADE)
    news_title = models.CharField(max_length=100, blank=True, null=True)
    news_content = models.CharField(max_length=500)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'news'
