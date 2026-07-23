function validateForm()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var rollno = document.getElementById("rollno").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Name validation
    

    if(fname == "")
    {
        alert("Enter first name");
        return false;
    }

   

    if(lname == "")
    {
        alert("Enter last name");
        return false;
    }

  


    // Roll number validation
    if(rollno == "")
    {
        alert("Enter roll number");
        return false;
    }


    // Phone number validation
    var phonePattern = /^[0-9]{10}$/;

    if(phone == "")
    {
        alert("Enter phone number");
        return false;
    }

    if(!phonePattern.test(phone))
    {
        alert("Phone number must contain exactly 10 digits");
        return false;
    }


    // Email validation
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(email == "")
    {
        alert("Enter email");
        return false;
    }

    if(!emailPattern.test(email))
    {
        alert("Enter a valid email address");
        return false;
    }


    // Gender validation
    if(!document.getElementById("male").checked &&
       !document.getElementById("female").checked &&
       !document.getElementById("other").checked)
    {
        alert("Select gender");
        return false;
    }


    alert("Registration Successful!");
    return true;
}
 
 

  