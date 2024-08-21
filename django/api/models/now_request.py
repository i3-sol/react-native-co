from django.db import models


# Reference: ED19_006_テーブル定義書.docx
class NowRequest(models.Model):
    nows = models.ForeignKey('Now', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    nows_request_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'now_requests'
