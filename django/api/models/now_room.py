from django.db import models



# Reference: ED19_007_テーブル定義書.docx
class NowRoom(models.Model):
    now = models.ForeignKey('Now', on_delete=models.CASCADE)
    meet_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='meet_rooms')
    remeet_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='remeet_rooms')
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'now_rooms'
