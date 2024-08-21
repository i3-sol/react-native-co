from django.db import models


# Reference: ED19_031_テーブル定義書.docx
class UserVerification(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    user_verification_type = models.SmallIntegerField()
    user_verification_image = models.CharField(max_length=100, null=True, blank=True)
    user_verification_status = models.SmallIntegerField()
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'user_verifications'
