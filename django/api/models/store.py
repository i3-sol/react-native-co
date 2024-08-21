from django.db import models

# Reference: ED19_037_テーブル定義書.docx
class Store(models.Model):
    open_chat = models.ForeignKey('OpenChat', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return "テスト"

    class Meta:
        db_table = 'stores'
