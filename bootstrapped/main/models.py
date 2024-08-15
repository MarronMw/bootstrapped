from django.db import models

# Create your models here.
# START OF INTERFACE MODIFICATION MODELS (sections by sections)
class Company(models.Model):
    company_name=models.CharField(max_length=255)
    motto=models.CharField(max_length=255)
    about_txt=models.CharField(max_length=1024)

class Hero(models.Model):
    bg=models.ImageField(default="bg.png")


class Pillars(models.Model):
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    fa_icon_name=models.CharField(max_length=105)
    pillar_name=models.CharField(max_length=255)
    pillar_txt=models.CharField(max_length=750)


class Service(models.Model):
    Company=models.ForeignKey(Company,on_delete=models.CASCADE)
    service=models.CharField(max_length=255)
    img=models.ImageField(default="img.png")
    description=models.CharField(max_length=1024)

class Culture(models.Model):
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    fa_icon_name=models.CharField(max_length=105)
    culture_name=models.CharField(max_length=255)
    culture_txt=models.CharField(max_length=750)

class Staff(models.Model):
    fname=models.CharField(max_length=50)
    lname=models.CharField(max_length=60)
    dp=models.ImageField(default="staff.png")
    position=models.CharField(max_length=75)
    whatsapp=models.CharField(max_length=1024,blank=True)
    instagram=models.CharField(max_length=1024,blank=True)
    linkedIn=models.CharField(max_length=1024,blank=True)
    phone=models.CharField(max_length=14)
# END OF INTERFACE MODIFICATION MODELS

#START OF DESTINATION MODELS
class Destination(models.Model):
    name=models.CharField(max_length=255)
    description=models.CharField(max_length=1024)
    image=models.ImageField(default="img.png")
#END OF DESTINATION MODELS