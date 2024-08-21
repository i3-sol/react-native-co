from django.urls import path
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import OpenChatCategoryViewSet,OpenChatViewSet,RegionViewSet,PrefectureViewSet, EventChatUserHostedViewSet


router = DefaultRouter()
router.register(r'open_chat_category', OpenChatCategoryViewSet)
router.register(r'open_chat', OpenChatViewSet)
router.register(r'region', RegionViewSet)
router.register(r'prefecture', PrefectureViewSet)
router.register(r'event_chat_user_hosted', EventChatUserHostedViewSet)



urlpatterns = [
    path('', include(router.urls)),
]