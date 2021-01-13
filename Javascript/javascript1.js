function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

let addbtn = document.getElementById('register')
addbtn.addEventListener("onclick",validateForm)




function validateForm(){
    let firstname = document.getElementById('fname').value
    let lastname = document.getElementById('lname').value
    let telnum = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let street = document.getElementById('street').value
    let zipnum = document.getElementById('zipcode').value
    let district = document.getElementById('district').value




    let fnameErr = lnameErr = telnumErr = emailErr = streetErr = zipnumErr = districtErr = true


    // validate first name and last name
    if (firstname = ""){
        printError("fnameErr", "Please enter your first name.")
    }
    else {
        let regexText = /^[a-zA-Z\s]+$/;

        if (regexText.test(firstname) === false){
            printError("fnameErr", "Please enter a valid name." )
            console.log("match!ddd");
        }

        else{
            printError("fnameErr", "")
            fnameErr = false
        }
    }



    if (lastname = ""){
        printError("lnameErr", "Please enter your last name.")
    }
    else {
        let regexText = /^[a-zA-ZäöåÄÖÅ]+$/;

        if (regexText.test(lastname) === false){
            printError("lnameErr", "Please enter a valid name." )
        }

        else{
            printError("lnameErr", "")
            lnameErr = false
        }
    }

// Validate mobile number
    if (telnum = ""){
        printError("telnumErr", "Please enter your mobile number.")
    }
    else {
        const regexnum = /^[1-9]\d{9}$/;

        if (regexnum.test(telnum) === false){
            printError("telnumErr", "Please enter a valid 10 digit mobile number.")
        }

        else{
            printError("telnumErr", "")
            telnumErr = false
        }
    }



 // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address.");
        } 
    
     else {
        
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(regexEmail.test(email) === false) {
        printError("emailErr", "Please enter a valid email address.");
        console.log("work2")
        } 
    
        else{
        console.log("work1")
        printError("emailErr", "");
        emailErr = false;
        }
     }



     // validate address
     if (street = "")
     {
         printError("streetErr", "Please enter your street.")
     }

     else{
            printError("streetErr", "")
            streetErr = false
        }
    


        if (zipnum = ""){
            printError("zipnumErr", "Please enter your zip code.")
         }
         else {
            const regexnum = /^[1-9]\d{9}$/
    
            if (regexnum.test(telnum) === false){
                printError("telnumErr", "Please enter a number.")
            }
    
            else{
                printError("zipnumErr", "")
                zipnumErr = false
            }
        }



        if (district = ""){
            printError("districtErr", "Please enter your district.")
        }
        else {
            const regexText = /^[a-zA-ZäöåÄÖÅ]+$/
    
            if (regexText.test(district) === false){
                printError("districtErr", "Please enter just letters." )
            }
    
            else{
                printError("districtErr", "")
                districtErr = false
            }
        }


        if((fnameErr || lnameErr || telnumErr || emailErr || streetErr || zipnumErr|| districtErr) == true) {
            return false;
         }

         else{

            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                  return v.toString(16);
                });
              }
            
              console.log(email)
              console.log("match!");
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

            //let person = new Person{}
            console.log(this.email)
            console.log("match!###");
         }

        
        
        
        

}

