# transport-project

<h3>Fisrt Use "npm install" to install dependecies</h3>

<ul>Dependencies used in this project :
    <li>"dotenv": "^16.0.3"</li>
    <li>"express": "^4.18.2"</li>
    <li>"mongoose": "^6.9.3"</li>
</ul>

<h4 >To run type : npm start</h4>

"uploadDataToDatabase.js" was used to upload datas in json to database

<p style="color:red"> I put my mogno uri to use it connect to db easyly</p>
<div>
<h3 style="margin:auto">owners routes</h3>
[Get] for see all owners data use : <a href="http://localhost:3000/owners">http://localhost:3000/owners</a>

[Post] for create an owner use : <a href="http://localhost:3000/owners">http://localhost:3000/owners</a>

<h3 style="margin:auto">cars routes</h3>
 
[Get] for see all cars data use :
 <a href="http://localhost:3000/cars/">http://localhost:3000/cars</a>
<hr/>
[Get] for filter by colors use :  <a href="http://localhost:3000/cars/colorfilter/">http://localhost:3000/cars/colorfilter</a>
<h4>Example</h4>http://localhost:3000/cars/colorfilter/?color=blue Or http://localhost:3000/cars/colorfilter/?color=blue&&color=black
<hr/>
[Get] for filter by owner age use : <a href="http://localhost:3000/cars/agefilter/">http://localhost:3000/cars/agefilter</a>
<h4>Example</h4> http://localhost:3000/cars/agefilter?less=78&&great=38 Or http://localhost:3000/cars/agefilter?less=78
<hr/>
[Post] for adding a car to an owner use : <a href="http://localhost:3000/cars/addcarto/:national_code">http://localhost:3000/cars/addcarto/:national_code</a>
<h4>Example</h4> should send an owner national code as params and send data in body like this json :
<div>
{
    "name":"alireza" ,
      "national_code": 21954654,
      "age": 25,
      "total_toll_paid":2500
}
</div>

 </div>
