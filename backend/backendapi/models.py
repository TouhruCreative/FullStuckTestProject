from django.db import models

class YoutubeVideo(models.Model):
    title = models.CharField(max_length=100)
    channel = models.CharField(max_length=100)

    def __str__(self):
        return self.title
