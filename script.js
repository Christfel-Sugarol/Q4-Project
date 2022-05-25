function trigger() {
    // declaration of variables
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var pword = document.getElementById('pword').value;

    var sexID = ["Male", "Female", "Neither"];
    var sexReqCount = 0;

    for (x = 0; x < 3; x++) {
        if (document.getElementById(sexID[x]).checked) {
            var sex = document.getElementById(sexID[x]).value;
        } else {
            sexReqCount++;
        }

    }

    var reason = document.getElementById('reason').value;

    //if input is empty
    var variableName = ["pword", "email", "reason"]
    var errorName = ["Password_req", "Email_req", "Reason_req"]
    var errorCount = 0;

    for (x = 0; x < 3; x++) {
        if (!(window[variableName[x]] && window[variableName[x]].value)) {
            errorCount++;
            document.getElementById(errorName[x]).style.opacity = "1";
        } else {
            document.getElementById(errorName[x]).style.opacity = "0";
        }
    }

    if (fname == "") {
        errorCount++;
        document.getElementById("First_req").style.opacity = "1";
    } else {
        document.getElementById("First_req").style.opacity = "0";
    }

    if (lname == "") {
        errorCount++;
        document.getElementById("Last_req").style.opacity = "1";
    } else {
        document.getElementById("Last_req").style.opacity = "0";
    }


    if (sexReqCount == 3) {
        errorCount++;
        document.getElementById("Sex_req").style.opacity = "1";
    } else {
        document.getElementById("Sex_req").style.opacity = "0";
    }

    //if no field is empty

    if (errorCount == 0) {
        var userDetails = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "sex": sex,
            "reason": reason
        }

        var JsonData = JSON.stringify(userDetails);
        localStorage.setItem("details", JsonData);

        window.location.href = "htdocs/redirect.html";
    }
}

function testt() {
    var errorName = ["First_req", "Last_req", "Password_req", "Email_req", "Reason_req", "Sex_req"];

    for (x = 0; x < 6; x++) {
        document.getElementById(errorName[x]).style.opacity = "0";
    }
}
