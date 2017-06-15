Test Store Maintenance

Overview
This repo contains an application that performs QA test store data maintenance. It allows you to:
  a) search for the existence of an given test store number,
  b) create a new test store by cloning a specific production store and masking identifying data, or
  c) delete an existing test store number.

To create a test store the app first finds the production store number to be cloned inside the SOURCE database.  It then masks the identifying fields, creates a new BU_ID for the test store, and inserts the new test store rows into the DESTINATION database.

The tables that are created for test stores are:
  - EPR_BU
  - EPR_STR
  - BU_OPS_HIER (pending)
  - BU_MER_HIER (pending)
  - FPRD_BU_OPS_HIER (pending)
  - FPRD_BU_MER_HIER (pending)
  - EPR_PRTY_SRC_X (pending)
  - OS_BU (pending)
  - PRTY_CMECH_ROLE (pending)


To run the application locally
  yarn run dev

Link to application in PCF
  http://test-store-maintenance.apps-np.homedepot.com/


Testing the Application in Postman

1 - To show all stores in the SOURCE database:
    GET test-store-maintenance.apps-np.homedepot.com/stores/src/
    GET test-store-maintenance.apps-np.homedepot.com/business_units/src/

    GET localhost:3000/stores/src
    GET localhost:3000/business_units/src


2 - To select a specific store in the SOURCE database:
    GET test-store-maintenance.apps-np.homedepot.com/stores/src/5637
    GET test-store-maintenance.apps-np.homedepot.com/business_units/src/5637

    GET localhost:3000/stores/src/5637
    GET localhost:3000/business_units/src/5637

3 - To show all stores in the DESTINATION database:
    GET test-store-maintenance.apps-np.homedepot.com/stores/dst/
    GET test-store-maintenance.apps-np.homedepot.com/business_units/dst/

    GET localhost:3000/stores/dst
    GET localhost:3000/business_units/dst

4- To select a specific store in the DESTINATION database:
   GET test-store-maintenance.apps-np.homedepot.com/stores/dst/5555
   GET test-store-maintenance.apps-np.homedepot.com/business_units/dst/5555

   GET localhost:3000/stores/dst/5555
   GET localhost:3000/business_units/dst/5555

5 - To delete a specific store in the DESTINATION database:
    DELETE test-store-maintenance.apps-np.homedepot.com/stores/dst/5555

    DELETE localhost:3000/stores/dst/5555

6 - To create a new test store in the DESTINATION database:
    POST test-store-maintenance.apps-np.homedepot.com/stores/dst/5637?test_store_number=5555

    POST localhost:3000/stores/dst/5637?test_store_number=5555



Technologies used in application
   - JavaScript
   - PostgreSQL
   - Knex
   - Express
   - Jasmine
   - Bookshelf


Link to related Trello board
  https://trello.com/b/4pQyapqi/test-store-maintenance  

Link to related Data Model ERD
  https://www.lucidchart.com/documents/edit/610176e4-ec2b-46f9-ba4b-513f267735a2
