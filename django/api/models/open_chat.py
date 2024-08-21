from .open_chat_category import OpenChatCategory
from django.db import models
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFill

from ..classes.model_class import ModelQuerySetClass

class ModelQuerySet(ModelQuerySetClass):
    default_field = ["id", "chat_name"]

# Reference: ED19_002_テーブル定義書.docx
class OpenChat(models.Model):
    category1 = models.ForeignKey(OpenChatCategory, on_delete=models.CASCADE, related_name='openchats_category1')
    category2 = models.ForeignKey(OpenChatCategory, on_delete=models.CASCADE, related_name='openchats_category2', null=True, blank=True)
    category3 = models.ForeignKey(OpenChatCategory, on_delete=models.CASCADE, related_name='openchats_category3', null=True, blank=True)
    region_code = models.IntegerField()
    chat_name = models.CharField(max_length=100)
    chat_description = models.CharField(max_length=500)
    chat_image_file_name = models.ImageField(upload_to='chats/%y/%m/%d/')
    user_number = models.IntegerField(default=0)
    age_type = models.IntegerField(default=0)

    user = models.ForeignKey('User', on_delete=models.CASCADE)
    deleted_flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = ModelQuerySet.as_manager()

    chat_image_file_name_big = ImageSpecField(source="chat_image_file_name",
                         processors=[ResizeToFill(1280, 1024)],
                         format='JPEG'
                         )

    chat_image_file_name_thumbnail = ImageSpecField(source='chat_image_file_name',
                            processors=[ResizeToFill(150,150)],
                            format="JPEG",
                            options={'quality': 60}
                            )
    
    class Meta:
        db_table = 'open_chats'
