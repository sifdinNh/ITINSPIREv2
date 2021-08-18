from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView
from . import views




urlpatterns = [

    path('',views.adminPage,name="adminPage"),
    path('productList/',views.productList,name="productList"),
    path('productList/delete/<int:id>',views.productDelete),
    path('addProduct/',views.addProduct,name="addProduct"),
    path('orderList/',views.orderList,name="orderList"),
    path('orderList/delete/<int:id>',views.orderDelete),
    path('login/',LoginView.as_view(template_name='demo_1/login.html'),name="Login"),
    path('logout/',views.logout_view,name="Logout"),
]
