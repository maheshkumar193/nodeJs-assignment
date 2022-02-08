const fs = require('fs');
const request = require('request');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

let content = "";
const url = 'http://google.com';
request(url,(err,res,body)=>{
    if(err) return err;
    content+=body;
    fs.writeFile('./googleWebPage.txt',body,(err,data)=>{
        if(err) return err;
        console.log('data loaded');
    })
});

eventEmitter.on('getGoogleWebPage',(url)=>{
    request(url,(err,res,body)=>{
        if(err) return err;
        content+=body;
        fs.writeFile('./googleWebPage1.txt',body,(err,data)=>{
            if(err) return err;
            console.log('data loaded');
        })
    });
})

eventEmitter.emit('getGoogleWebPage',url)
