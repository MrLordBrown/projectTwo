# Udacity Front End Nano Degree
## Project 2 - Landing Page
### Christopher R. Brown
### mrlordvondoombraun@gmail.com
---
## Goals
* Create a landing page
* Generate navigation menu dynamically using Javascript
* Ensure code is consistent with Udacity style guides
* Ensure code meets specifications of Project Rubric

## Architecture
Project has the following file structure:

    -css
    --styles.css
    -js
    --app.js
    index.html
    README.MD

## Usability
The project is responsive to changes in screen size at the 35em breakpoint.

## Styling and Section Active State
The section currently visible in the viewport and identified by the class name "active" includes different styling.  The opacity increases over the non-active state and the background gradient increaes creating a frame around the text.  Styling changes occur through the `makeActive()` function.

## HTML
Four sections have been added to the original template code for a total of seven.

## Navigation
The navigation menu for scrolling to different sections is built dynamically using Javascript.  The main function for this behavior is the `addItems()` function.

## Scroll to Anchor
Clicking or touching a word in the menu list will scroll the user to that section on the page using the anchor ID.

## README
This readme file is included to provide the user with a summary of the page's functionality.

## Comments
Concise comments have been included in the code.

## Code Quality
Code has been linted and reviewed for readability and consistency with Udacity style standards.

