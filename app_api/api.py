from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from random import randint

@api_view(['GET'])
def randomszam(request):
    return Response(randint(1, 20), status=status.HTTP_200_OK)

@api_view(['POST'])
def szoveg(request):
    print(request.data['szoveg']) # itt már nem POST, hanem fetch api esetén data!!!
    return Response('megkaptam, köszi, szuper!', status=status.HTTP_200_OK)