from django.db import models

# Reference: ED19_025_テーブル定義書.docx
class Faq(models.Model):
    faq_type = models.SmallIntegerField()
    faq_question = models.CharField(max_length=1000)
    faq_answer = models.CharField(max_length=1000)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'faqs'
