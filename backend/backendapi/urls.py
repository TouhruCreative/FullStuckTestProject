from rest_framework import DefaultRouter
from .views import YoutubeVideoViewSet

router = DefaultRouter()
router.register("videos",
                YoutubeVideoViewSet,
                basename="videos")

urlpatterns = router.urls