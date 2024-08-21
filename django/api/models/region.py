from django.db import models
from ..classes.model_class import ModelQuerySetClass

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "region_name"]


# Reference: ED19_038_テーブル定義書.docx
class Region(models.Model):
    region_name = models.CharField(max_length=50)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    def __str__(self):
        return self.region_name

    class Meta:
        db_table = 'regions'
