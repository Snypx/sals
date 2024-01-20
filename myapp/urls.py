# myapp/urls.py

from django.urls import path 
from .import views


urlpatterns = [
    path('admin/', views.admin, name='admin'),
    path('add/', views.add_product, name='add_product'),
    path('', views.home, name='home'),
    path('product_list/', views.product_list, name='product_list'),
    path('product_line/', views.product_line, name='product_line'),
    path('product_detail/<str:product_id>/', views.product_detail, name='product_detail'),
    # Add other URLs as needed
]