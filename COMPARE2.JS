function filter2(obj1,obj2) {
  var diff=false;
    var result = {};
    for(key in obj1) {
       // console.log(key);
          if(obj2[key]==undefined) {
         
          diff=true;
          break;
          }else if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') {
               diff=arguments.callee(obj1[key],obj2[key]);
          }else  if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') {
               diff=arguments.callee(obj1[key], obj2[key]);
            
          }  else if(obj2[key] != obj1[key]){
              diff=true;
               break;
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
   
    
    return diff;
   
}
