const fs = require('fs');
const parse = require('xml-parser');
 
const xmlParser = function(xmlData){
    
    this.xmlData = xmlData;

    this.myParser = ()=>{
        return parse(this.xmlData);
    }

    this.xmlToJson = function(fileName){
        this.xmlData = fs.readFileSync(fileName,'utf-8',(err,data)=>{
            if(err){
                console.log("file doesnot exists");
                return err;
            }
            return data;
        });
        return JSON.stringify(this.myParser());
    }

}

let xmldata = `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns="urn:enterprise.soap.sforce.com">
  <soapenv:Body>
     <createResponse>
        <result>
           <id>003D000000OY9omIAD</id>
           <success>true</success>
        </result>
        <result>
           <id>001D000000HTK3aIAH</id>
           <success>true</success>
        </result>
     </createResponse>
  </soapenv:Body>
</soapenv:Envelope>`;


const obj = new xmlParser(xmldata);

console.log(obj.xmlData);

console.log(obj.myParser());

console.log(obj.xmlToJson(`xmlTemplate.xml`));



