from django.http import HttpResponse
from django.shortcuts import render
import os
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



def sendsms(request):
    account_sid = 'AC81cdfcba15e427497ba25b9c032edb57'
    auth_token = '5a8659c74cc60d95334b96ee27c382c3'
    client = Client(account_sid, auth_token)

    message = client.messages.create(
                            body='Hi, your test result is Fine. Great job',
                            from_='+16076382289',
                            to='+919305201428' 
                        )
    print(message.sid)
    return render(request,"alert.html")