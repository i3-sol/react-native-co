from rest_framework  import serializers
from ..models.prefecture  import Prefecture
from ..classes.serializers_class import SerializersClass

class PrefectureSerializer(SerializersClass):        
    class  Meta:
        model  = Prefecture

    
