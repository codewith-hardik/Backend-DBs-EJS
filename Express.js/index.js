const express = require('express'); 
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.use((req,res)=>{
//     console.log("request resived");
//     res.send({name: "hardik",       // response send
//         fname:"mahendrabhai"})
// })


app.get('/', (req, res) => {
    res.send('You conected get root path I use Nodemon ');
  })
//   app.get('/search', (req, res) => {
//     res.send('You conected get search path');
//   })
//   app.get('/conectme', (req, res) => {
//     res.send('You conected get conectme path');
//   })
//   app.get('/docs', (req, res) => {
//     res.send('You conected get docs path');
//   })
//     app.get('/help', (req, res) => {
//     res.send('You conected get help path');
//   })
  
// app.post('/', (req, res) => {
//     res.send('You conected post root path');
//   })
//   app.get('*', (req, res) => {
//     res.send('Thid page not exist');
//   })
  

  //  path parameters.....

app.get('/:username/:pass',(req,res)=>{
     let { username , password} = req.params;
    let  htmlStr = `<h1>Welcome to #${username} !!!</h1>`
    res.send(htmlStr);
})

//  Queruy 
app.get('/search',(req,res)=>{
    let { q } = req.query;
    if(!q) {
        res.send("You Not Search Anything...!!!")
    }
    res.send(`<h1>You Search Query : #${q}</h1>`)
})






