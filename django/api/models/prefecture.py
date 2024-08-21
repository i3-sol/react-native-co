from django.db import models
from .region import Region
from ..classes.model_class import ModelQuerySetClass

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "prefecture_name"]


# Reference: ED19_039_テーブル定義書.docx
class Prefecture(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    prefecture_name = models.CharField(max_length=50)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()


    def __str__(self):
        return self.prefecture_name

    class Meta:
        db_table = 'prefectures'
