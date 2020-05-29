var fs = require('fs');
const arg = process.argv.slice(2);
const argument = arg.map((element) => { 
    var newElement = element.split('').sort().join('') ;
    return newElement;
})



const data = fs.readFileSync('dictionnaire.txt', 'UTF-8');
const tableaufile = data.split(/\r?\n/).map((element) => { 
    var newElement = element ;
    return newElement;
})


var i = 0 ;

while (i < tableaufile.length -1) {
    
        if(tableaufile[i].split('').sort().join('') == argument){
        console.log(tableaufile[i]);
        
        } 
        i++
}





