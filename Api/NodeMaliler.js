const { response } = require('express');
const http = require('http')

const nodemailer = require('nodemailer')

const server = http.createServer((req,res)=>{
    const auth = nodemailer.createTransport({
        service : 'gmail' ,
        secure : true,
        port : 465,
        auth : {
            user : 'rajsoni909192@gmail.com',
            pass : 'eyturpwxrophtvsf'
        }
    });
    const receiver = {
        from : "rajsoni909192@gmail.com" , 
        to : "rajsoni909192@gmail.com",
        subject : "Hello" ,
        text : "Hello"
    }

    auth.sendMail(receiver,(error,emailResponse)=>{
        if(error)throw error;
        console.log(`sucess!`);
        response.end();
    })
})

server.listen(8080);