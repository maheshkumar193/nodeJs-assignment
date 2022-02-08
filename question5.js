const shortUrl = require("node-url-shortener");


const urls = ['http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg',
'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg',
'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg',
'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg',
'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg',
'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg',
'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg',
'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'
];

const UrlShortener = function(urls){
    this.originalUrls = urls;
    this.csvOriginal = urls.toString();
    this.shortUrls = [];  
    this.csvShortened = "";  
    this.shortenUrls = ()=>{
        let x = [];
        for(let url of this.originalUrls){
            shortUrl.short(url, (err, url1)=>{
                if(err){
                    console.log("can't shorten");
                    return err;
                }
                x.push(url1);
                this.csvShortened = x.toString();
            });
        }
        this.shortUrls = x;
    }        
}
const obj = new UrlShortener(urls);

console.log('csv file',obj.csvOriginal);

obj.shortenUrls();

setTimeout(()=>{

    console.log(obj.originalUrls);

    console.log(obj.shortUrls);

    console.log("csv file",obj.csvShortened);

},2000);