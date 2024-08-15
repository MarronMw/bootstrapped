from django.contrib import admin
from .models import Company,Hero,Pillars,Service,Culture,Staff,Destination
# Register your models here.
interface_models=[Company,Hero,Pillars,Service,Culture,Staff]
destination_models=[Destination]
admin.site.register(interface_models)
admin.site.register(destination_models)