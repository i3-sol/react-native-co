from rest_framework  import serializers
from ..models.store  import Store
from ..classes.serializers_class import SerializersClass

class StoreSerializer(SerializersClass):        
    joins = {
        "prefecture":["id", "prefecture_name"],
        "municipality":["id", "municipality_name"],
        "user":["id", "user_name"]
    }
    class  Meta:
        model = Store

    
