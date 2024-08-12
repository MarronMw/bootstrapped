from django.contrib import admin
from .models import Company,Hero,Pillars,Service,Culture,Staff
# Register your models here.
interface_models=[Company,Hero,Pillars,Service,Culture,Staff]
admin.site.register(interface_models)