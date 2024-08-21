from django.db import models
from ..classes.model_class import ModelQuerySetClass

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "gnere_name"]


# Reference: ED19_036_テーブル定義書.docx
class StoreGenre(models.Model):
    genre_name = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    def __str__(self):
        return self.genre_name


    class Meta:
        db_table = 'store_genres'
