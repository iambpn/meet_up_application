import json5
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import MeetUps


# Create your views here.
@csrf_exempt
def getAllMeetups(request):
    if request.method == "POST":
        data = list(MeetUps.objects.all().values())
        return JsonResponse({"data": data}, status=200)
    else:
        return JsonResponse({"error": "GET Method Not Supported"}, status=404)


@csrf_exempt
def addMeetups(request):
    if request.method == "POST":
        data = json5.loads(request.body.decode("utf-8"))

        obj = MeetUps(title=data["title"], image=data["image"], address=data["address"],
                      description=data["description"]);
        obj.save()
        return JsonResponse({"status": "success"}, status=200)
    else:
        return JsonResponse({"Error": "GET Method Not Supported"}, status=404)
