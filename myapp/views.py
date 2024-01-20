# myapp/views.py

from django.shortcuts import render, redirect
from .forms import ProductForm
from .models import Product

def home(request):
    return render(request, 'home.html')

def admin(request):
    return render(request, 'admin.html')

def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})

def product_line(request):
    unique_products = Product.objects.values('product_id', 'product_name').distinct()
    return render(request, 'product_line.html', {'unique_products': unique_products})

def product_detail(request, product_id):
    product_data = Product.objects.filter(product_id=product_id).order_by('date')
    
    return render(request, 'product_detail.html', {'product_data': product_data})

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  # You can define a success page
    else:
        form = ProductForm()

    return render(request, 'add_product.html', {'form': form})