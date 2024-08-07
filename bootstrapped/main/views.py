from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"index.html")

def desinations(request):
    return render(request,"destinations.html")

def allDestinations(request):
    return render(request,"allDestinations.html")

def tourPackage(request):
    return render(request,"tourpackage.html")