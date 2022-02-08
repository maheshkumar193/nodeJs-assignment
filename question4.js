const request = require('request');
const fs = require('fs');
const https = require("https");
//https is opening images
//request is not opening

const urls = [
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg"
];

let cnt = 0,folder = 0;

for(let url of urls){
    if(cnt%5==0){
        folder++;
    }
    cnt++;
    const folderpath = `./folder${folder}`;
    if(!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath)
    }
    const filepath = `${folderpath}/img${cnt}.jpg`;
    let c = cnt;
    https.get(url,(res)=>{       
        console.log(c); 
        res.pipe(fs.createWriteStream(filepath)).on('finish',(err)=>{
            if(err){
                console.log("could not finish img",cnt);
            }
        })
    })
}
