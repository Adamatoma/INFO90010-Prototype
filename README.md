# INFO90010-Prototype
This is a guideline on how to clone this repository and build up this project.
# Clone this repository
Open your terminal and select a folder for this project, run the following code in your command line: 

git clone https://github.com/Adamatoma/INFO90010-Prototype.git

Then the project will be downloaded into your local pc.

# Installation
1. Mysql
(1) Please download MYSQL by this link: https://www.mysql.com/downloads/
(2) Set the user (with "root") and password (with "prototype123") for further backend connecting.
(3) Use and execute the create table script in the opened mysql query box.

(After that you will see a new database schema called "rental" is created, in which you might want to check tables and data. But bear in mind that, these data are only example data for prototype displaying, though some information is realistic. Further development might follow this format with real data.)

2. Nodejs
      You also need to install node from this website https://nodejs.org/
# Build up
1. Use cd command to enter "backend" folder, and run the following code to install mysql connection package.
```javascript
npm install mysql --save
```
2. Run command "npm start" to start the backend.
3. After step 2 is working and backend has been built up. Then use cd command to enter "frontend" folder and execute following code to install "react-scripts" package: 
```javascript
rm -rf node_modules/ package-lock.json
npm cache clean --force
npm install react-scripts --unsafe-perm
npm install --unsafe-perm
npm install react-bootstrap --save
```
4. In order to make sure the Map function is working, you also need to register and achieve a google map API Key from the following link:https://console.cloud.google.com/google/maps-apis/start
5. After you have the API Key, you also need to create a file called ".env.local" under your local frontend folder. Then add content as shown here:
     `REACT_APP_GOOGLE_KEY="`your API Key here`"`
     
6. Then run command "npm run start" to start the frontend.


