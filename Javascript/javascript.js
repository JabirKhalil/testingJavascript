
/* import Person from "./Person.js";
import {uuidv4} from "./functions.js"; 
*/
 


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
let person = new Person('jon','mam', 00545,'go@f.com','down',214,'cob')

// console.log(person)

 //events

document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault()
  
//console.log(e.target.elements)

for (let element of e.target.elements){
 //console.log(element.tagName)

   switch(element.tagName){
    case 'INPUT':
      validateLength(element)
      
      break;
    
    
  } 

  switch(element.type){
    case 'email':
      validateEmail(element)
      break;
  }

  switch(element.type){
    case 'text':
      validateText(element)
      break;
  }
  

}
console.log(emailHolder);
})
 
function validateLength(element){
  if (element.required){
    if(element.value.length < 2)

    console.log('a little')
  }
  
}

function validateEmail(element){
  
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let emailHolder = document.getElementById('email').value



if (emailHolder.match(regexEmail)) {
  console.log("match!");
  console.log(emailHolder);
 
}
}


function validateText(element){
  let idFname = document.getElementsByTagName("INPUT")[0].id
  let idLname = document.getElementsByTagName("INPUT")[1].id
let txtTovald = element.id
 

 if (txtTovald == idFname || txtTovald == idLname )
  {
   
    let getFname = document.getElementById('fname').value
    let getLname = document.getElementById('lname').value
    
    const regexText = /^[a-zA-ZäöåÄÖÅ]+$/;
    
     if(getFname.match(regexText) ){
     
      let firstName = getFname 
      
      console.log(firstName)
       
     }

     if (getLname.match(regexText))
     {
      let lastName = getLname 
      console.log(lastName) 
     }
     if(!getFname.match(regexText)){
       console.log('need to fix')
     } 
      if(!getLname.match(regexText)){
        console.log('need to fix')
      } 

     /* switch(){

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
  }

  
}
