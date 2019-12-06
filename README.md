# Portfolio - Update 12/5/2019
Portfolio Update 2019

This is the latest iteration of my personal portfolio. There were a couple of inspirations that I had:
1. I wanted to work with a different CSS framework to expand my knowledge of different technologies.
2. I wanted to clean up my portfolio and give it a more modern look and feel.
3. I wanted to incorporate new technologies that I have enjoyed using, such as Firebase and Slick Carousel.

Please access my site at https://alixgrillo.github.io/.


## Table of Contents
* [About](#about)
* [Technical Features](#technical-features)
* [Requirements](#requirements)
* [Build Tools](#build-tools)
* [Acknowledgements](#acknowledgements)
* [License](#license)


## About
My portfolio has four sections: 
* [Home](#home)
* [About Me](#about-me)
* [Portfolio](#portfolio)
* [Contact Me](#contact-me)

### Home
It was important to me that the landing page be clean and highight my name and title. Along these lines,
I wanted to have the common items, such as Github and LinkedIn access buttons available on a navigation
bar in order to always be visible. This also includes downloading a current version of my resume and accessing
the various sections of the page.


<img src="/assets/images/landing-page.gif">

### About Me

<img src="/assets/images/about-me.png">

### Portfolio
The portfolio section utilizes a Slick Carousel that rotates every 5 seconds automatically. These are not
a comprehensive collection of my projects, however, it is a group of my favorites. A full collection of my 
work can be seen in Github at https://github.com/alixgrillo.

<img src="/assets/images/portfolio.gif">

### Contact Form
My contact form allows anyone visiting to send a message. Make sure you put in a name and an email as there is 
validation to ensure I am capturing that information. But send me a message too - it will make it more interesting.
Firebase will store all of this information with a timestamp.

<img src="/assets/images/contact-me.gif">

## Technical Features
Some of the features that I have included on this page are:
* Slick Carousel for portfolio. This should animate and move automatically every 5 seconds.
* Contact form saves any messages to Firebase database that I can access. There is a timestamp
included. (Note: A future enhancement will be to have an event listener look for new messages to
alert me when they have been submitted).
* Fully mobile responsive. Materialize was a big help on this, HOWEVER, their navbar is not automatically
mobile responsive. Thanks to Web Zone at https://www.youtube.com/watch?v=AhioxFWkYRg for leading me in the 
direction of converting the navbar to a side navbar when the screen falls below 992px.

<img src="/assets/images/mobile-responsive-navbar.gif">

## Requirements
There are no requirements for this website.

## Build Tools
* HTML/CSS
* Materialize CSS/JQuery 1.0.0
* JQuery
* Firebase 7.5.0 (Realtime Database)
* Slick Carousel 1.9.0
* Google Font
* Google Material Icons
* Font Awesome 4.7.0

## Acknowledgements
* Thank you to Unsplash for the following images:
1. Photo by Alex Knight (Background Image)
2. Photo by Artem Maltsev (Portfolio - Harry Potter)
3. Photo by Ruby Schmank (Portfolio - Animal GIF)
4. Photo by Jeremy Yap (Portfolio - Movie Trivia)
5. Photo by Kira auf der Heide (Portfolio - Gift) 
* Thank you to Canva Color Generator for providing me with a clean color palate based on a provided picture. 
(https://www.canva.com/colors/color-palette-generator/)