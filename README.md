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
<h3 style="text-align: center">owners routes</h3>
[Get] for see all owners data use : <a href="http://localhost:3000/owners">http://localhost:3000/owners</a>
<hr/>
[Post] for create an owner use : <a href="http://localhost:3000/owners">http://localhost:3000/owners</a>
<h4>Example</h4> should send data like json :
<div>
{
    "name":"alireza" ,
      "national_code": 21954654,
      "age": 25,
      "total_toll_paid":2500
}
</div>
<hr/>
[Get] for see by age filter use : <a href="http://localhost:3000/owners/agefilter/">http://localhost:3000/owners/agefilter/</a>
<h4>Example</h4> http://localhost:3000/owners/agefilter?less=78 Or http://localhost:3000/owners/agefilter?less=78&great=70
<hr/>
[Get] for get owner by national code use : <a href="http://localhost:3000/owners/:national_code">http://localhost:3000/owners/:national_code</a>
<h4>Example</h4> use national code as params to get the specific owner 
http://localhost:3000/owners/84654184
<hr/>
[Get] for get sorted list of violators owners use : <a href="http://localhost:3000/owners/violationowners">http://localhost:3000/owners/violationowners</a> 
<h3 style="text-align: center">cars routes</h3>
 
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
    "id": 10,
    "type": "big",
    "color": "black",
    "length": 6.3,
    "load_valume": 2000
}
</div>

 </div>
