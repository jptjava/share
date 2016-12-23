# share

var aik = {"nice":5,"id":50,"name":"AIK","description":"Hejja!","tasks":[{'foo':'bar','cake':[{'text':'some'}]}]};
var dif = {"id":50,"name":"Djurgården","description":"Hejja!","tasks":[{'foo':'bar'}]};

console.log(JSON.stringify(filter(aik,dif)));

function filter(obj1,obj2) {
    var result = {};
    for(key in obj1) {
          if(obj2[key]==undefined) {
          result[key]=obj1[key];
          console.log("not found key is "+key);
          }else if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') {
               result[key] =arguments.callee(obj1[key],obj2[key]);
          }else  if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') {
               result[key] =arguments.callee(obj1[key], obj2[key]);
            
          }  else if(obj2[key] != obj1[key]){
          result[key] = obj1[key] +" vs "+obj2[key];
          }
    	/*	if(typeof obj1[key] == 'array' ||  typeof obj1[key] == 'object'){
            arguments.callee(obj1[key]);
        }else{
    		console.log(obj1[key]);
        }*/
      /*  if(obj2[key] == undefined) result[key] = obj1[key];
        if(obj2[key] != obj1[key]) result[key] = obj2[key];
        if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') 
            result[key] = arguments.callee(obj1[key], obj2[key]);
        if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') 
            result[key] = arguments.callee(obj1[key], obj2[key]);*/
        
        
    }
    return result;
}
