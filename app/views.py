from django.shortcuts import render
from django.http import request, response, HttpResponse


class Mofonaina:

    def home(self,request):
        msg = "welcome my"
        return render(request, 'mofonaina/mofonaina.html', locals())

    def mamaky(self, request, id):
        return render(request, 'mofonaina/famakiana.html', locals())