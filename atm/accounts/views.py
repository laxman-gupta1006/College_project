from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Accounts
from django.http import HttpResponse
# Create your views here.

def verify_pin(request):
    if request.method == 'GET':
        acc_no = request.GET.get('acc_no')
        pin = request.GET.get('pin')
        account = get_object_or_404(Accounts, acc_no=acc_no)
        if account.pin == pin:
            return render(request,'banking.html',{'verified': True,'acc_no':acc_no})
        else:
            return render(request,'takepicture.html')