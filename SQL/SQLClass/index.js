const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'friend',
    password: 'Hardik@1'
  });

  let getRandomUser = () => {
    return [
       faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password()      
    ];
  }

  let data = [];
for(let i = 1; i<= 100; i++ ){
  data.push(getRandomUser());  // 100 fake users
}
  let q = "INSERT INTO data_100 (id, username, email, password) VALUES ? ";

  // let friends = [
  //   ["1","kk@biology","Scienc","kashyap123@gmail.com"],
  //   ["2","pk@maths","Scienc","prince123@gmail.com"]
  // ];


  // let q = "SHOW TABLES;";
try{    
  connection.query(q,[data],(err,result)=>{
    if (err) throw err;
    console.log(result);  
  });

}catch(err){
    console.log(err);
}
connection.end();



  


