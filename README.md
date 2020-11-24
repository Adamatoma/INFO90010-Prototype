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
     (2) Use and execute the create table script in the opened mysql query box.
     (3) Use and execute the insert data script in the opened mysql query box.
2. Nodejs
      You also need to install node from this website https://nodejs.org/
# Build up
1. Use cd command to enter "backend" folder, then run command "npm start" to start the backend
2. If step 1 is working. Then use cd command to enter "frontend" folder, then run command "npm run start" to start the frontend

# Important
1. In order to make sure the Map function is working, you also need to register and achieve a google map API Key from the following link:https://console.cloud.google.com/google/maps-apis/start
2. After you have the API Key, you also need to create a file called ".env.local" under your local frontend folder. Then add content as shown here:
          REACT_APP_GOOGLE_KEY="your API Key here"
