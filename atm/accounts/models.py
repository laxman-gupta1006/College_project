
# Create your models here.
from django.db import models

class Accounts(models.Model):
    acc_no = models.CharField(max_length=50, null=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    color1= models.CharField(max_length=30, null=True)
    color2= models.CharField(max_length=30, null=True)
    color3 = models.CharField(max_length=30, null=True)
    color4 = models.CharField(max_length=30, null=True)
    pin = models.CharField(max_length=4, null=True)

    def __str__(self):
        return self.first_name
