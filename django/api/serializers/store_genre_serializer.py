from rest_framework  import serializers
from ..models.store_genre  import StoreGenre
from ..classes.serializers_class import SerializersClass

class StoreGenreSerializer(SerializersClass):        
    class  Meta:
        model = StoreGenre

    
