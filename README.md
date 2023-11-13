# Eden_Nasa
Initial Repository for the Foundations project Eden by Team Nasa

# TO ACCESS THE DJANGO APP
clone the git repo using: https://github.com/Isaiah-Essien/Eden_Nasa
then cd Eden_Nasa
then cd backend 
install all the dependencies needed:
Django: pip install django
Rest framework api: pip install djangorestframework
corsheaders: pip install django-cors-headers

## For admin: Only super users will be able to access the super admin:
python manage.py createsuperuser

## To access the API endpoint:
admin: http://127.0.0.1:8000/admin/
Login: http://127.0.0.1:8000/api/auth/login/
Register: http://127.0.0.1:8000/api/auth/register/
To see all the registered user: http://127.0.0.1:8000/api/auth/get_registered_users/
To get all product and create new ones: http://127.0.0.1:8000/api/products/


