from rest_framework  import serializers
from ..models.open_chat  import OpenChat
from ..classes.serializers_class import SerializersClass

class OpenChatSerializer(SerializersClass):        
    joins = {
        "category1":["id", "category_name"]
    }

    class  Meta:
        model  = OpenChat

    
