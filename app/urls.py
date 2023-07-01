from django.urls import path, re_path
from app.views import *

urlpatterns = [
    re_path('^$', Mofonaina().home, name='home'),
    re_path('^mofonaina$', Mofonaina().home, name='mofonaina'),
    path('mofonaina/vakiana/<int:id>/', Mofonaina().mamaky, name='famakaina_mofonaina'),
]
