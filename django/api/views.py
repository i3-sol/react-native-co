from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models.open_chat_category import OpenChatCategory
from .models.open_chat import OpenChat
from .models.region import Region
from .models.prefecture import Prefecture
from .models.event_chat_user_hosted import EventChatUserHosted

from .serializers.opechat_category_serializer import OpenChatCategorySerializer
from .serializers.opechat_serializer import OpenChatSerializer
from .serializers.region_serializer import RegionSerializer
from .serializers.prefecture_serializer import PrefectureSerializer
from .serializers.event_chat_user_hosted_serializer import EventChatUserHostedSerializer


class OpenChatCategoryViewSet(viewsets.ModelViewSet):
    queryset = OpenChatCategory.objects

    def get_queryset(self):
        return OpenChatCategory.objects.params(self).all()
    
    def get_serializer_class(self):
        return OpenChatCategorySerializer.params(OpenChatCategorySerializer, self.request)

class OpenChatViewSet(viewsets.ModelViewSet):
    queryset = OpenChat.objects

    def get_queryset(self):
        return OpenChat.objects.params(self).all()
    
    def get_serializer_class(self):
        return OpenChatSerializer.params(OpenChatSerializer, self.request)

class RegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Region.objects

    def get_queryset(self):
        return Region.objects.params(self).all()
    
    def get_serializer_class(self):
        return RegionSerializer.params(RegionSerializer, self.request)



class PrefectureViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Prefecture.objects

    def get_queryset(self):
        return Prefecture.objects.params(self).all()
    
    def get_serializer_class(self):
        return PrefectureSerializer.params(PrefectureSerializer, self.request)

class EventChatUserHostedViewSet(viewsets.ModelViewSet):
    queryset = EventChatUserHosted.objects

    def get_queryset(self):
        return EventChatUserHosted.objects.params(self).all()
    
    def get_serializer_class(self):
        return EventChatUserHostedSerializer.params(EventChatUserHostedSerializer, self.request)

