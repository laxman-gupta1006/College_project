from django.http import HttpResponse
from django.shortcuts import render
from twilio.rest import Client
from sms import send_sms

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
def takepicture(request):
    #current_time=datetime.now().strftime('%H:%M')
    return render(request, 'takepicture.html')

def sendsms(request):
    account_sid = 'AC81cdfcba15e427497ba25b9c032edb57'
    auth_token = '52cdbb1e8278abeb1d215fa7ac3d9d98'
    client = Client(account_sid, auth_token)
    latitude=request.GET.get('latitude')
    longitude=request.GET.get('longitude')
    message = client.messages.create(
                            body=f'We found your card was swiped at https://www.google.com/maps/@{latitude},{longitude},16.25z',
                            from_='+16076382289',
                            to='+919305201428' 
                        )
    print(message.sid)
    return render(request,"alert.html")