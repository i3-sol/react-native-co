from django.db import models


# Reference: ED19_005_テーブル定義書.docx
class Now(models.Model):
    prefecture = models.ForeignKey('Prefecture', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    nows_detailed_location = models.CharField(max_length=25)
    nows_max_participant = models.IntegerField()
    nows_content = models.CharField(max_length=500)
    nows_media1 = models.CharField(max_length=100, null=True, blank=True)
    nows_media2 = models.CharField(max_length=100, null=True, blank=True)
    nows_media3 = models.CharField(max_length=100, null=True, blank=True)
    nows_media4 = models.CharField(max_length=100, null=True, blank=True)
    nows_media5 = models.CharField(max_length=100, null=True, blank=True)
    nows_display_time = models.SmallIntegerField()
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = 'nows'
