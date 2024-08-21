from rest_framework  import serializers
from ..models.open_chat_category  import OpenChatCategory
from ..classes.serializers_class import SerializersClass

class OpenChatCategorySerializer(SerializersClass):        
    class  Meta:
        model  = OpenChatCategory
        fields  = ("id", "category_name",)


    
