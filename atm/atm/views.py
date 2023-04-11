from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'index.html')

