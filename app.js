const express = require("express");
const app = express();
const port = 80;
const path = require("path");
const fs = require("fs");

app.use('/static', express.static('Static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    const con = " This is the best content of on the internet so far so use it wisely ";
    const params = {'title': 'PubG is the best game', "content":con};
    res.status(200).render('index.pug',params);
});

app.post('/', (req, res)=>{
    // console.log(req.body);
    Name = req.body.Name;
    Phone = req.body.Phone;
    Age = req.body.Age;
    Gender = req.body.Gender;
    more = req.body.more;

    let outputToWrite = `the name of the client is ${Name}, ${Age} years old, ${Gender}, contact number is ${Phone}, More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

app.listen(port, ()=>{
    console.log('This application is start successfully on the port 80')
}); 