from django.db import models


# Reference: ED19_017_テーブル定義書.docx
class MatchingRequest(models.Model):
    meet_id = models.BigIntegerField()
    to_meet_id = models.BigIntegerField()
    matching_request_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'matching_requests'
