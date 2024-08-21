from django.db import models
from ..classes.model_class import ModelQuerySetClass

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "store_name"]

# Reference: ED19_033_テーブル定義書.docx
class StoreUser(models.Model):
    store = models.ForeignKey('Store', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)  # Note: Remember to hash passwords
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'store_users'
