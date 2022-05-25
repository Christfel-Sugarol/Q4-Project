function js() {
    var retrieved = localStorage.getItem("details");
    var userDetails = JSON.parse(retrieved);
    console.log(userDetails.email);

        document.getElementById("fname").textContent += userDetails.fname;
        document.getElementById("lname").textContent += userDetails.lname;
        document.getElementById("email").textContent += userDetails.email;
        document.getElementById("sex").textContent += userDetails.sex;
        document.getElementById("reason").textContent += userDetails.reason;
}

window.onload =  js;
