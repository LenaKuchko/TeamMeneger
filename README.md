# MarvelTeam

by Lena Kuchko

## Installation
1. Download or clone the repository from https://github.com/LenaKuchko/TeamMeneger
2. Using terminal, navigate to the directory in which you downloaded project.
3. In terminal run  $ npm install.
4. You nedd to get your oun api-key for Firebase:
    4.1. Go to https://firebase.google.com/ website.
    4.2. Sign in with your email account, then press "Get Started", create new project. 
    4.3. Click "Add firebase to Your App", your should see generated code with configuration information like on this pattern:
    export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };
     4.4. In the src/app folder, create a file api-keys.ts and put this code into it.
5. Go to the Database area by selecting the Database option from the navbar on the left-hand side. Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
     5.1. Change both the ".read", and ".write" properties here to "true" like this:<br> `
    {
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}`
6. Click on the Database option in the left-hand navigational menu.
    6.1. Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. 
    6.2. Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
    6.3. Locate the sample-heroes.json file from the project folder, and upload it.
7. Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser to view the project.

## Description
|Behavior| Input |Output|
|---|:---|:---|
|User is able to view a list of heroes  | no input required |app display all heroes|
|User is able to view detail information about chosen hero.  | click on title with hero's name|app display information about hero|
|User is able to view about page.  | click about link|app display information about website|
|Admin can add new hero. | click admin link |app display forms for creating, editing and deleting hero|
|Admin is able to update hero.   | fill up form to edit hero and click update button|app update information about hero|
|Admin is able to delete hero.  | click delete button |app delete hero|

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Technologies Used

* Angular 2
* Bootstrap
* CSS
* Firebase
* HTML
* Javascript
* Typescript

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Lena Kuchko**
