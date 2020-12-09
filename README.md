# Crypto-Tracker

Check out the deployed app at https://ryan-crypto-tracker.herokuapp.com/.  You can register a new account or login using the username "test" and password "test".

This project allows users to look at the different cryptocurrencies being traded on the market, as well as monitor their current and historical prices.  Registered users can add specific currencies to their "portfolio" to allow convenient monitoring of only the currencies in which they are interested.

## Using the App

Upon navigating to the home page, the user can see the top 20 cryptocurrencies currently being traded.  Each card shows the currency's picture, 3-letter symbol, name, and its current price in US dollars.

![screenshot1](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot1.JPG)

The user may filter the list of cryptocurrencies by typing a partial or complete symbol in the text field at the top and clicking the "Search" button.  The "Reset" button restores the full list of currencies.

![screenshot2](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot2.JPG)

If the user clicks on one of the currencies, they are brought to a screen that shows an interactive plot tracking the price of the currency over the previous 24 hours.  The "Back to List" button returns the user to the home screen, and the "Login to add to portfolio" button takes the user to the login screen.

![screenshot3](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot3.JPG)

The user can also click on the "30 Day" tab to switch the plot to one showing daily prices for the last 30 days.

![screenshot4](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot4.JPG)

Clicking either the "Login to add to portfolio" button on the currency details screen or the Login link in the navbar will take the user to the login page.  Here the user enters their username and password and clicks "Login" to log in.

![screenshot5](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot5.JPG)

If they don't yet have an account, the user can click the "Register" link in the navbar to go to the register page.  The user chooses a username, enters their email, and sets their password before clicking the "Register" button.  After successful registration, the user is not automatically logged in - rather they are redirected to the login page where they can login using the account they just created.

![screenshot6](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot6.JPG)

Upon loggin in, the user is brought to the homepage that shows all the currencies in their portfolio.  For a brand new user, their portfolio will be empty, so no currencies will appear.

![screenshot7](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot7.JPG)

Clicking the "Browse Currencies" link in the navbar will take the user to the browse page, which displays the same content as the home screen for an unauthenticated user - namely, a filterable list of the top 20 most traded cryptocurrencies.

![screenshot8](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot8.JPG)

Clicking one of the currencies brings up the same details screen as for an unauthenticated user, only this time there is an "Add to portfolio" button.  Clicking this button adds the selected cryptocurrency to the user's portfolio, and then redirect back to the home screen showing the updated list of the user's chosen cryptocurrencies.

![screenshot9](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot9.JPG)

![screenshot10](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot10.JPG)

From the home screen, if the user clicks on one of the currencies in their portfolio, they are taken to the same details screen as before but with a button that says "Remove from portfolio."  Clicking this button deletes the currency from their list of currencies they want to monitor and redirects back to the home screen.

![screenshot11](https://github.com/RyanEllingson/Crypto-Tracker/blob/master/src/main/resources/screenshot11.JPG)

## Tools and Technologies Used

The back end for this application is a Maven Java project hosted on an embedded Tomcat server.  The API is built implementing a Front Controller design pattern using a single servlet and a set of Request Helper classes.  The Request Helpers match the request URI and forward the request to the appropriate Controller class which implements the business logic.  The Jackson Databind dependency is utilized to deal with JSON in the HTTP requests and responses.

The application stores data in a PostgreSQL database.  The database interaction is handled using a Data Access Object (DAO) class, which contains all the JDBC logic.  User authentication is handled using session storage.  When the Controller class methods are called by the Request Helpers, the methods first check to see if the request came from an authenticated user, and if so whether that user has the appropriate permission to perform the task requested.  If so, a DAO instance is created and the appropriate method is called.

A Singleton design pattern is applied to the JDBC connection instance.  The first time the application is asked to perform a database operation the ConnectionFactory class instantiates a new database connection.  This connection is stored as a private variable, and is returned every subsequent time a connection is requested.

The front end is an Angular application featuring Angular routing.  All information related to the cryptocurrencies is obtained from a third-party API called CryptoCompare.  A "user" service is used to send HTTP requests to the back end related to registration and login, and a "currency" service is used to handle back end requests related to the user's portfolio, as well as requests to the CryptoCompare API.  Additionally, Plotly.js was used to generate the interactive plots showing the price-over-time data for the cryptocurrencies.

Styling on the front end uses Bootstrap as a baseline, with custom styling for many of the colors.  Bootstrap classes are used to modify corners and shadows on the cards to give them a more physical appearance.  CSS transitions are used for hover effects on the cards and navbar links, and the :hover and :active pseudo-classes are used to simulate the physical pressing of the button components.  The buttons also have a :focus-visible pseudo-class styling to enhance the accessibility of the site for users not using a mouse.  To achieve the animated effect of the input labels growing in size when the corresponding input is focused, the label had to be placed underneath the input in the markup and then the order reversed using flexbox and flex-direction: column-reverse.

## Acknowledgements

This was a group project built as part of Revature's Online Certification Program (ROCP) in collaboration with Eric Bergan, Becca Morse, and Tyrone Veneracion.  The original project had a Spring Boot back end which was built by Becca and Tyrone, while Eric and I worked on the front end Angular app.  The original Spring back end is still saved in this repo in the "cryptotracker" folder - however that code is not being used in this iteration of the project, rather I built a new Maven back end for deployment on Heroku.  So in this project's current form, the back end was built by me, and the front end was built by me and Eric.