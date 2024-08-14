
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name="main"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index,name="index"),
    path('destinations/', views.desinations,name="destinations"),
    path('tourpackages/', views.tourPackage,name="tourpackage"),
    path('allDestinations/', views.allDestinations,name="destinations-all"),
    path('staff_dash/<int:id>',views.staff_dashboard,name="staff_dash"),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
