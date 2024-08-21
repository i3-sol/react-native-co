from django.db import models

# Reference: ED19_036_テーブル定義書.docx
class StoreGenre(models.Model):
    store_genre_content = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'store_genres'
