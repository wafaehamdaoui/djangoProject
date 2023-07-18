from django.contrib import admin
from django.urls import path 
from .views import TodoView

urlpatterns = [
    path('todo/',TodoView.as_view(), name='todo'),
]