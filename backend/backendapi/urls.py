from rest_framework.routers import DefaultRouter
from .views import YoutubeVideoViewSet

router = DefaultRouter()
router.register("videos",
                YoutubeVideoViewSet,
                basename="videos")

urlpatterns = router.urls