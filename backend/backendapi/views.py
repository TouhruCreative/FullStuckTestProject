from rest_framework.views import APIView
from rest_framework.response import Response
from .models import YoutubeVideo
from .serializers import YoutubeVideoSerializer

class YoutubeVideoView(APIView):
    def get(self, request):
        videos = YoutubeVideo.objects.all()
        serializer = YoutubeVideoSerializer(videos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = YoutubeVideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
