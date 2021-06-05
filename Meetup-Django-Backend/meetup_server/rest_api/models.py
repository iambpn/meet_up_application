from django.db import models


# Create your models here.
class MeetUps(models.Model):
    title = models.CharField(max_length=255)
    image = models.TextField()
    description = models.TextField()
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.title
