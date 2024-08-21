from django.db import models


# Reference: ED19_019_テーブル定義書.docx
class DepositHistory(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    billing = models.ForeignKey('Billing', on_delete=models.CASCADE)
    stripe_charge_id = models.IntegerField(null=True, blank=True)
    deposit_amount = models.IntegerField()
    deposit_status = models.SmallIntegerField(default=1)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'deposit_histories'
