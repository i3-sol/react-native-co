from django.db import models
from ..classes.model_class import ModelQuerySetClass
from .prefecture import Prefecture
from .store_genre import StoreGenre
from .municipality import Municipality
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFill


class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "store_name"]

    def wherePickup(self) :
        query = self
        query = query.filter(is_pickup=True)

        return query

    def whereRecommend(self) :
        query = self
        query = query.filter(is_recommend=True)

        return query

    def params(self, view) :
        self = super().params(view)
        
        if view.request.query_params.getlist("wheres[]"):
            if ("pickup" in view.request.query_params.getlist("wheres[]")) :
                self = self.wherePickup()
            if ("recommend" in view.request.query_params.getlist("wheres[]")) :
                self = self.whereRecommend()

        return self


# Reference: ED19_037_テーブル定義書.docx
class Store(models.Model):
    open_chat = models.ForeignKey('OpenChat', on_delete=models.CASCADE)
    store_genre = models.ForeignKey(StoreGenre, on_delete=models.CASCADE, default=0)
    store_name = models.CharField(default="", max_length=50)
    image1 = models.ImageField(upload_to='stores/%y/%m/%d/', blank=True, null=True)
    prefecture = models.ForeignKey(Prefecture, on_delete=models.CASCADE, blank=True, null=True)
    municipality = models.ForeignKey(Municipality, on_delete=models.CASCADE, blank=True, null=True)
    other = models.TextField(blank=True, null=True)
    opening_hours = models.CharField(max_length=50, blank=True, null=True)
    closing_time = models.CharField(max_length=50, blank=True, null=True)
    is_pickup = models.BooleanField(default=False)
    is_recommend = models.BooleanField(default=False)

    user = models.ForeignKey('User', on_delete=models.CASCADE)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    image1_big = ImageSpecField(source="image1",
                         processors=[ResizeToFill(1280, 1024)],
                         format='JPEG'
                         )

    image1_thumbnail = ImageSpecField(source='image1',
                            processors=[ResizeToFill(250,250)],
                            format="JPEG",
                            options={'quality': 60}
                            )

    def __str__(self):
        return self.store_name

    class Meta:
        db_table = 'stores'
