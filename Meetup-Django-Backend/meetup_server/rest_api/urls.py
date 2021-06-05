from django.urls import path
from . import views

# api will be prepend to '/'
urlpatterns = [
    path("get-meetups/", views.getAllMeetups, name="getAllMeetups"),
    path("add-meetup/", views.addMeetups, name="addMeetups")
]
