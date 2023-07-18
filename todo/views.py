from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class TodoView(APIView):
    def get(self, request):
        return Response({'data':'salam from get!'})
        #return render(request, 'todo/index.html')

    def post(self,request):
        return Response({'data':'salam from post!'})