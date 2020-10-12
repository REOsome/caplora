let students =['david', 'ryan', 'kelsey'];
students.forEach(el=>{
    console.log(el)
})

students.map((student, index)=>{
   console.log(student , index )
})

var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "myusername",
//   password: "mypassword"
// }); 

let connection = mysql.createConnection({

    host:'localhost',
    user:'roott',
    password:''
});



function conn(){
    return new Promise(
        function(resolve, reject){
            return connection.connect(function(err){
                if (err){
                    // console.error(err)
                    reject(err)
                }
                else{
                    // console.log(true)
                    resolve(true)
                }
            })
        }
    )
}

conn().then(
    function(response){
        console.log(response,'res')
    }
)
.catch(
    function(error){
        console.log(error,'err')
    }
)