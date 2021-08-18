from django.urls import path, include
from .views import productView
from .views import orderView
from .views import contactView


urlpatterns = [
#products
    path('products/', productView.getProducts,name="getProducts"),
    path('products/<str:pk>/',productView.getProduct,name='getProduct'),
#orders
    path('orders/', orderView.getOrders, name='orders'),
    path('orders/add/', orderView.addOrderItems, name='orders-add'),
    path('orders/myorders/', orderView.getMyOrders, name='myorders'),
    path('orders/<str:pk>/deliver/', orderView.updateOrderToDelivered, name='order-delivered'),
    path('orders/<str:pk>/', orderView.getOrderById, name='user-order'),
    path('orders/<str:pk>/pay/', orderView.updateOrderToPaid, name='pay'),
#contact
    path('contactUs/',contactView.contactUs, name='contactus'),
]
