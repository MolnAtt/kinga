from django.shortcuts import render

# Create your views here.
def hello(request):
    template = 'index.html'
    context = {}
    return render(request,template,context)
