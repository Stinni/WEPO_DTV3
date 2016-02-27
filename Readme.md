# About this app

This is a simple Angular app, used to get started in unit testing for Angular apps. It has a simple login page. If the user enters a username and password which are the same (example: "icehot1/icehot1"). then the user will be redirected to the about page. Otherwise, an error should be displayed. (Note: the actual logic behind which users/passwords are accepted is not important in this excercise).


If you want to execute this app, you should run the following commands:

bower install
python -m http.server 8089 
# or the equivalent Python 2.x if you have that version

(or some other port) from the root of the project, i.e. NOT from the /src folder.

Then you should navigate to:

http://localhost:8089/src/#/

However, the actual behaviour (or the look!) of the app is not important. Our aim is to write a unit test for the code inside the LoginController, the rest of the code is just to ensure we have a functioning application.