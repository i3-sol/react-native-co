from rest_framework  import serializers
from ..models.event_chat_user_hosted  import EventChatUserHosted
from ..classes.serializers_class import SerializersClass

class EventChatUserHostedSerializer(SerializersClass):        
    joins = {
    }

    class  Meta:
        model  = EventChatUserHosted

    
