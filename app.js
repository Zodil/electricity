var item=document.getElementById("item");

var afunction=function(){
   var bodyid= document.getElementById("bodyid");

   if(bodyid.classList.contains("bodyidcolour")){
    bodyid.classList.remove("bodyidcolour")
   }  else{
    bodyid.classList.add("bodyidcolour")    
   } 
} 

item.addEventListener("click", afunction, true);

var item2=document.getElementById("item2");
console.log(item2)

var onefunction=function(){
   var bodyid= document.getElementById("bodyid");
//    console.log(bodyid);

   if(bodyid.classList.contains("bodyidcolour2")){
       bodyid.classList.remove("bodyidcolour2")
   }  else{
       bodyid.classList.add("bodyidcolour2")
    } 
}

item2.addEventListener("click", onefunction, true);
