from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'index.html')


def banking(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'banking.html')


def bankbalance(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'bankbalance.html')


def changepin(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'changepin.html')

def fingerprint(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'fingerprint.html')

def enterpin(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'enterpin.html')

def colorauth(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'colorauth.html')

def ministatement(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'ministatement.html')

def cashwithdrawal(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'ministatement.html')
