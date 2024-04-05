# Empowering Smallholder Farmers through Digital Agriculture

## Project Description:
Smallholder farmers globally face challenges such as, low crop yield, low income, and insufficient resources for optimal crop management. The project includes the development of a comprehensive website offering real-world practical applications of agricultural practices tailored to each location. It covers sustainable techniques, farmers forum, and facilitates connections between buyers and sellers.

## Installation Process
## Backend
### Prerequisites
Python 3. x

Node.js and npm

Vs code or other IDE you prefer

Create a virtual environment: python -m venv venv

Activate the Virtual Environment

.\venv\Scripts\activate (Note this will depend on the device you're using, On macOS/Linux: source venv/bin/activate
)
### Install Django and Other Dependencies:

pip install django, 

pip install djangorestframework, 

pip install corsheaders,

pip install pillow

### Create Django Project and Apps

django-admin startproject backend

cd backend

python manage.py startapp addproduct

python manage.py startapp authentication

python manage.py startapp farmer

python manage.py startapp contact

### Configure Installed Apps in settings.py:

Add the following under installed apps. 

INSTALLED_APPS = [
    'addproduct',
    
    'authentication',
    
    'farmer',
    
    'contact',
    
    'rest_framework',
]
###Created necessary files like views and forms and we added codes to the ones that were there which are URLs, models, admin ect

### Apply Migrations:

python3 manage.py migrate

python3 manage.py make migrations

### Run the server

python3 manage.py runserver

You can stop and create the superuser and rerun the app again

## Frontend Installation

### Prerequisites
Node.js and npm

Vs Code or any other IDE you prefer

### Create a React App:
 
npm create-react-app frontend ( we have used pain CSS, so you don't have to select any library for CSS)

cd frontend

#### Install Required Frontend Libraries:
npm install @fortawesome/react-fontawesome axios bosstract react-icons react-router-dom react-scripts web-vitals jest-dom

## TO ACCESS THE DJANGO APP

Clone the git repo using: https://github.com/Isaiah-Essien/Eden_Nasa

then cd Eden_Nasa

## For backend 

cd backend 

install all the dependencies needed:

Django: pip install Django

Rest framework API: pip install Django rest framework

cors headers: pip install Django-cors-headers

pip install pillow

After you install all dependencies, you will be able to access the Django endpoint APIs, that we connected to the backend to be able to fetch data to the frontend. 
![Screenshot from 2023-12-14 16-09-09](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/a72ec132-11c5-48df-9222-2335b5fcec0e)
![Uploading Screenshot from 2023-12-14 16-09-09.png…]()
From here you can interact with different endpoints by adding the endpoint routes to the browser.

### Example 
![Screenshot from 2023-12-14 17-23-21](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/82904474-25b7-40a1-ad77-03bc346f2786)

![Screenshot from 2023-12-14 17-18-40](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/dcae731e-e6cb-4912-a3c6-906c560c29e4)


### To access frontend

After cloning the given link

do:

cd frontend

cd eden-pages

##### Install rewired dependencies by running npm install

##### and run the application by command: npm run start

It will start your application:

## Features and Functionalities


## Log In & Sign Up In the backend

api end point for login:http://127.0.0.1:8000/api/auth/api/login/

api end point for Signup: http://127.0.0.1:8000/api/auth/api/signup/

Through api/auth route you can be able to log in and create an account. The information should be sent in JSON format and the request should be posted:

{
"username": "new_username",

"password": "new_password",

"email": "user@example.com"
}

and when you want to logIn credentials should be in this format:

{

"username": "new_username",

"password": "new_password",

}

## Product Routs

Add product: http://127.0.0.1:8000/product/create/list/

Remove a product: http://127.0.0.1:8000/product/details/1/ (by adding an id of product you want to remove

Update the product: http://127.0.0.1:8000/product/update/2/

Product list:  http://127.0.0.1:8000/product/list

## Famers Routes:

Add product: http://127.0.0.1:8000/farmers/farmers/

Remove a product:http://127.0.0.1:8000/farmers/farmers/1/

Update the product: http://127.0.0.1:8000/famer/update/2/

Product list:  http://127.0.0.1:8000/famer/list


## Frontend

We have connected our API endpoint to the fronted for the app to have a life. 

### screenshoots
![Screenshot from 2023-12-14 17-24-34](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/93f2d4c0-704d-4f87-a543-146dead6155d)
![Screenshot from 2023-12-14 17-25-46](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/8042a9ac-9725-46a2-a921-e8226221429a)

![Screenshot from 2023-12-14 15-47-36](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/ecd8c3b1-732d-4e52-8055-86b7eaef707f)
![Screenshot from 2023-12-14 15-47-55](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/e80b8d2b-2d3d-4054-913e-51862a1f8dd3)
![Screenshot from 2023-12-14 15-48-26](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/a3f7991f-adde-4e94-9d7e-044709c269b2)

![Screenshot from 2023-12-14 15-48-53](https://github.com/Isaiah-Essien/Eden_Nas![Screenshot from 2023-12-14 15-49-21](https://github.com/Isaiah-Essien/Eden_Nasa/assets/79199207/b760bc56-cf14-40f2-849f-647ae22d0852)
a/assets/79199207/ac896c17-4f98-4e82-9eb1-4649399fd79b)




### Additional Documentation


## Link to video explaining some concepts of the app- (https://www.loom.com/share/2722d58c723443378792822c54629848?src=composer)








