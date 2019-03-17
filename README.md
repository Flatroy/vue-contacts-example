# CONTACT APPLICATION
Welcome in our Test !   
  
The goal of this test is to create an application to manage our contact.

Below you have a .zip with all the assets and the screen

### Be careful, you don’t have to create a server (node.js) or a database. Only the front side (html, css, js file only).

### HTML / CSS Integration ###
* You have to integrate this two screen in responsive design
* Pay attention to browser compatibility for Chrome (latest version), Firefox (latest version), IE11 and Edge

### JAVASCRIPT - DOM MODIFICATION
In this step, we have to add interactivity to our page

* Delete (trash icon) : delete the contact and modify the DOM
* Edit (pencil icon) :  You can edit all the contact details (without of the contact picture - to save time)
* With the "plus" bouton, you can add a new contact. For simplify, it's not necessary to create an image uploader, you can use the same image for all the new contacts
* Before to post the modification (add or edit), you have to verify the phone field : it can contain only : number, (), +

### JAVASCRIPT - CALL AJAX
For each contact we want to add the Gps coordinates relative to the adress filled

* Call the API Google : https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8
* Take the object RESULTS > GEOMETRY > LOCATION and display the "lat" and "long" on the contact.

### BITBUCKET - GIT PUSH 
When you finish, you have to : 

* Create a new branch with your name
* Push your code in this branch


### LINK TO DOWNLOAD ALL THE TEST ASSETS

### Desktop Screen
![Desktop Screen2.PNG](https://i.imgur.com/gtnGDDa.png)

### Mobile-Table Screen (Responsive version)![Mobile - Tablet Screen2.png](https://i.imgur.com/d46o1om.png)
