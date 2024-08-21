from rest_framework  import serializers
from ..models.region  import Region
from ..classes.serializers_class import SerializersClass

class RegionSerializer(SerializersClass):        
    class  Meta:
        model  = Region

    
