from django.db import models
from .prefecture import Prefecture
from .store import Store
from ..classes.model_class import ModelQuerySetClass
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFill
from django.utils import timezone

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "event_chat_name"]

    def whereRecommend(self) :
        query = self

        query = query.filter(event_chat_publish_status=True)

        now = timezone.now()
        query = query.filter(event_chat_recruitment_start_on__lte=now, event_chat_recruitment_end_on__gte=now)

        return query

    def params(self, view) :
        self = super().params(view)
        
        if view.request.query_params.getlist("wheres[]"):
            if ("recommends" in view.request.query_params.getlist("wheres[]")) :
                self = self.whereRecommend()

        return self

# Reference: ED19_010_テーブル定義書.docx
class EventChatUserHosted(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    prefecture = models.ForeignKey('Prefecture', on_delete=models.CASCADE)
    store = models.ForeignKey('Store', on_delete=models.CASCADE)
    event_chat_image1 = models.ImageField(upload_to='stores/%y/%m/%d/')
    event_chat_image2 = models.ImageField(upload_to='stores/%y/%m/%d/')
    event_chat_image3 = models.ImageField(upload_to='stores/%y/%m/%d/')
    event_chat_image4 = models.ImageField(upload_to='stores/%y/%m/%d/')
    event_chat_image5 = models.ImageField(upload_to='stores/%y/%m/%d/')
    event_chat_name = models.CharField(max_length=45)
    event_chat_introduction = models.CharField(max_length=800)
    event_chat_recruitment_start_on = models.DateField()
    event_chat_recruitment_end_on = models.DateField()
    event_chat_deadlines_on = models.DateField()
    event_chat_publish_status = models.BooleanField(default=False)
    event_chat_billing_setting = models.BooleanField(default=False)
    event_chat_contact = models.CharField(max_length=100)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    event_chat_image1_big = ImageSpecField(source="event_chat_image1",
                         processors=[ResizeToFill(1280, 1024)],
                         format='JPEG'
                         )

    event_chat_image1_thumbnail = ImageSpecField(source='event_chat_image1',
                            processors=[ResizeToFill(250,250)],
                            format="JPEG",
                            options={'quality': 60}
                            )


    def __str__(self):
        return self.event_chat_name


    class Meta:
        db_table = 'event_chat_user_hosteds'
