
from base.models import Order, OrderItem , Product
from django.shortcuts import (get_object_or_404,render,redirect)
from django.contrib.auth.decorators import login_required
from django.contrib.auth import  authenticate, logout

# Create your views here.
@login_required
def adminPage(request):
    orders = list(Order.objects.all())
    totalOrders=len(orders)

    return render(request,'demo_1/index.html',{'totalOrders':totalOrders})
@login_required
def productList(request):
    products = list(Product.objects.all())
    context = {'products': products}
    print(type(products[0].createdAt))
    return render(request,'demo_1/productsList.html',context)
@login_required
def orderList(request):
    orders = Order.objects.all()
    ordersItems=[]
    for i in orders:
        print(i.shippingaddress)
        ordersItems.append(i.orderitem_set.all())
    context = {'orders': zip(orders,ordersItems),'ordersItems':ordersItems }
    print(ordersItems)
    return render(request,'demo_1/ordersList.html',context)
@login_required
def orderDelete(request,id):
    obj = get_object_or_404(Order, _id=id)
    obj.delete()
    return redirect('orderList')
@login_required
def productDelete(request,id):
    obj = get_object_or_404(Product, _id=id)
    obj.delete()
    return redirect('productList')
@login_required
def addProduct(request):
    return render(request,'demo_1/addProduct.html', {})

def logout_view(request):
    logout(request)
    return redirect('Login')