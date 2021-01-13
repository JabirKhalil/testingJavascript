
/* import Person from "./Person.js";
import {uuidv4} from "./functions.js"; 
*/
 
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function printError1(error, hintMsg) {
  // document.getElemenstByClass(error).innerHTML = hintMsg;
}


 //events

document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault()
  
console.log(e.target.elements)
let errors = []

for (let element of e.target.elements){
 //console.log(element.tagName)

   switch(element.tagName){
    case 'INPUT':
     errors.push(validateLength(element)) 
      
      break;
    
    
  } 

  switch(element.type){
    case 'email':
        errors.push(validateEmail(element))
      break;
  }

  switch(element.type){
    case 'text':
        errors.push(validateText(element))
        errors.push(validateTextLast(element))
        errors.push(validateTextAddress(element))
      break;

      
  }
  
  

}
console.log(errors);
if (!errors.includes(true)){
    //window.location.replace("success.php")
    document.getElementById("flip").innerHTML = document.getElementById("fname").value
}

})



 
function validateLength(element){
  if (element.required){

    if(element.value.length < 2){
       console.log('a little')
       printError1("error", "Please enter a valid email address.");
       return true 
    }
    
    
    
  }
  printError1("error", "");
  return false
}

function validateEmail(element){
    let emailErr = true
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let emailHolder = document.getElementById('email').value



if (!emailHolder.match(regexEmail)) {
    console.log("erro email")
    printError("emailErr", "Please enter a valid email address.");
    return true
  
  
    
  } 

  else{
  console.log("match!");
  
  console.log(emailHolder);
  printError("emailErr", "");
  
  
  
  }
return false
}


function validateText(element){
  let idFname = document.getElementsByTagName("INPUT")[0].id
  
let txtTovald = element.id
let fnameErr = true

 let getFname = document.getElementById('fname').value
    
 
    if (txtTovald == idFname )
  {
   
   
    
    const regexText = /^[a-zA-ZäöåÄÖÅ]+$/;
    
     if(getFname.match(regexText) ){
     
      let firstName = getFname 
      printError("fnameErr", "");
    
      console.log(firstName)
       
     return false
     }
     else{
        console.log("errorfirst")
        printError("fnameErr", "Please enter a valid first name." )
        
        }
  }
return true
}

function validateTextLast(element){
        let idLname = document.getElementsByTagName("INPUT")[1].id

        let txtTovald = element.id
        
        let getLname = document.getElementById('lname').value
    
        if (txtTovald == idLname ){

            const regexText = /^[a-zA-ZäöåÄÖÅ]+$/;
                    if (getLname.match(regexText)){

                        let lastName = getLname 
          
                        printError("lnameErr", "");
                            
                        console.log(lastName)
                            return false
                    }
   
                    else{
                            console.log("errlast")
                            printError("lnameErr", "Please enter a valid last name." )
                            
                        }
        }
        return true
}

    function validateTextAddress(element){

        let idDistrict = document.getElementsByTagName("INPUT")[6].id
        let txtTovald = element.id
        
        let getDistrict = document.getElementById('district').value
        if (txtTovald == idDistrict){
            const regexText = /^[a-zA-ZäöåÄÖÅ]+$/;

            if (getDistrict.match(regexText)){
            
                let district = getDistrict 
                 
                       printError("districtErr", "");
                       
                       console.log(district)
                       return false
            }
         else{
           console.log("errdis")
           printError("districtErr", "Please enter just letters." )
           
           }
        }
   
       
   return true
  
  
    }
        
  
        
  
        /*   if(!getFname.match(regexText)){
       console.log('need to fix')
     } 
      if(!getLname.match(regexText)){
        console.log('need to fix')
      } 

     switch(){

      case (getFname.match(regexText) ):
          let firstName = getFname 
      
          console.log(firstName)
          break;

      case (getLname.match(regexText)):
              let lastName = getLname 
              console.log(lastName) 
              break;
              
      default:
          console.log('need to fix')
          break;
     } */
     
  class Person{
    constructor(fname, lname, phone, email, street, zipcode, district){
        this.fname = fname
        this.lname = lname
        this.phone = phone
        this.email= email
        this.street = street
        this.zipcode = zipcode
        this.district = district
        this.id = uuidv4()
        }
    
    }
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
//let person = new Person('jon','mam', 00545,'go@f.com','down',214,'cob')


