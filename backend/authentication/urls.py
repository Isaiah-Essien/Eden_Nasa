# authentication/urls.py

from django.urls import path
from .views import registration_view, login_view, get_registered_users

urlpatterns = [
    path('register/', registration_view, name='register'),
    path('login/', login_view, name='login'),
    path('get_registered_users/', get_registered_users, name='get_registered_users'),
]
