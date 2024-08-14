from django.shortcuts import render,get_object_or_404,redirect
#interface models import
from .models import Company,Hero,Pillars,Service,Culture,Staff

# Create your views here.
def index(request):
    staff=Staff.objects.all()
    context={
        "staff":staff,
    }
    return render(request,"index.html",context)

def desinations(request):
    return render(request,"destinations.html")

def allDestinations(request):
    return render(request,"allDestinations.html")

def tourPackage(request):
    return render(request,"tourpackage.html")

def staff_dashboard(request,id):
    if (request.method=="POST"):
        staff=get_object_or_404(Staff,pk=id)
        context={
            "staff":staff,
        }
        return render(request,"staff/dashboard.html",context)
    else:
        return redirect('main:index') #redirecting to the index page