from django.contrib import admin
from django.urls import path
from backendapi.views import YoutubeVideoView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', YoutubeVideoView.as_view()),
]
