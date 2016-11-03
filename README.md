# Express App Tutorial

* This app tutorial was provided by Kendrick Coleman [It can be found here](https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton)

* My goal from this tutorial was to learn how to create a CRUD application using Express and Node to 
see the differences from Rails. 

* Differences and Similarites:
  * Express generator maintains a simlar MVC structure to Rails.  App objects are still 
    contained within Models. However, routes are defined explicitly within the controller while Rails 
    aggregates them in a separate file and maps them to their corresponding controllers. I did find that 
    Express controllers become much more complicated with all the error handling that has to occur at the 
    level of the database (if an entry does not exist) having to explicitly create the response errors and HTTP statuses.  
  * Param validations take a bit more effort than Rails strong params. 
  * MongoDB clearly is different than SQL datbases--there needs to be an explicit connection to the DB and 
    creating schemas is certainly different than Rails migrations 
  * Jade and ERB are similar enough templating engines, with Jade being less verbose but senstive to white space.
  

* The purpose of this tutorial was to expose me to a different stack to create a CRUD app using a NoSQL datbase (MongoDB).  
I would like to spend more time using Express/Node on some future lightweight apps.
