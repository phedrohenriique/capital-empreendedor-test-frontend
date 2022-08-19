# CapitalEmpreendedorTestFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files, yoy need to run the back-end project in order to work properly.

## Project

The project was intended to be used by a backoffice of a company. It has access to all the clients, with their respective products list. You can navigate in the upper menu, and change the view. 

The Clients button wll lead to an interface in wich you can choose at the right side wich client you want to see the informations, and at the left side a card of the client products list with their status, if clicked it will open a modal with further products list.

The Products button will lead to an interface in wich you can search for a specific client, and show each product card. Each card will lead to a modal, so it can be edited and saved.

## Features

The whole application was build in native parameters, no libraries were added besides the Angular 14.x.x bundle.

It is a SPA ( Single Page Application) and an router object was used to render the pages, there are 4 main folders, Components, Pages, Services, Types, and the main application folder.

Components and Pages were suited to store all the components and their templates, it was decided to use a single .ts extension file to hold the style, structure and class logic to the components for better understanding.

Service Http for handling server request was created in order to improve optimization and application logic.

All the components were imported in the main application file app.module.ts but will be moved to other modules for code improvements.


