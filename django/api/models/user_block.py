from django.db import models

# Reference: ED19_032_テーブル定義書.docx
class UserBlock(models.Model):
    blocking_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='blocking_users')
    blocked_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='blocked_users')
    blocked_on = models.DateField(null=True, blank=True)
    unblocked_on = models.DateField(null=True, blank=True)
    block_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'user_blocks'
