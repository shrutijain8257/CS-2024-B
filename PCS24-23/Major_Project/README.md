To run this project

First run the command 
-> 'npm install' to install all the dependencies <br>
Also get your account at [infura.io](https://www.infura.io/) and replace your _**Project_Id**,**Secret_Key**_ and _**Subdomain**_ in the file,<br> <br>
located at **context/Voter.js**<br><br><br>
 ![Alt text](image.png)<br>
and also in **next.config.js** file<br><br><br>
![Alt text](image-1.png)

then deploy your project on locally running blockchain by command 
<br> -> '**npx hardhat run**' to run blockchain and <br>
-> '**npx hardhat run scripts/deploy.js --network localhost**' or any network you want <br>
after this 

give command <br>
-> '**npm start**' to start the app at localhost
