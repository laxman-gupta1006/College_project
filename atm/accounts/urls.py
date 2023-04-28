from django.contrib import admin
from django.urls import path,include
from . import views


urlpatterns = [

        path('verifypin',views.verify_pin,name="verifypin"),
]
