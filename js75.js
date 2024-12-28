<html>
    <head>
        <title>75</title>
        <style>
            body{
                font-size:16px;
                background:#f9f9f9;
                font-family:"segoeuI","Helvetica Neue",Arial,sans-serif;
            }
            h2{
                text-align:center;
                text-decoration:underline;
            }
            form{
                width:300px;
                background:#fff;
                padding:15px 40px  40px;
                border:1px solid #ccc;
                margin:50px 9 to 0;
                border-radius:5px;
            }
            label{
                display:block;
                margin-bottom:5px;
            }
            label i{
                color:#999;
                font-size:80%;
            }
            input,select{
                border:1px solid #ccc;
                padding:10px;
                display:block;
                width:100px;
                boxsizing:border-box;
                border-radius:2px;
            }
            .row{
                padding-bottom:10px;
            }
            .form-inline{
                border:1px solid #ccc;
                padding:8px 10px 4px;
                border-radius:2px;
            }
            .form-inline label,.form-inline input{
                display:inline-block;
                width:auto;
                padding-right:15;
            }
            .error{
                color:red;
                font-size:90%;
            }
            input[type="submit"]{
                font-size:110%;
                font-weight:100;
                background:#006dcc;
                border-color:#016BCI;
                box-shadow:63px 0 #0165b6;
                color:#fff;
                margin-top:10px;
                cursor:pointer;
            }
            input[type="submit]:hover{
                background:#0165b6;
            }
        </style>
    </head>
    <body>
        <form name="contact Form" onsubmit="returnvalidateform()" action="confirmation.php" method="post">
            <h2>Application form</h2>
            <div class="row">
                <label>Full name</label>
                <input type="text" name="name"/>
                <div class="error" id="nameErr"></div>
            </div>
            <div class="row">
                <label>Email Address:</label>
                <input type="text" name="email"/>
                <div class="error" id="emailErr"></div>
            </div>
            <div class="row">
                <label>Mobile Number</label>
                <input type="text" name="mobile" maxlength="10"/>
                <div class="error" id="mobileErr"></div>
            </div>
            <div class="row">
                <label>country</label>
                <select name="country">
                    <Option>select</Option>
                    <Option>Australia</Option>
                    <Option>India</Option>
                    <Option>united states</Option>
                    <Option>united Kingdom</Option>
                </select>
                <div class="error" id="countryErr"></div>
            </div>
            <div class="form-inline">
                <label>Gender</label>
                <div class="form-inline">
                    <label><input type="radion" name="gender" value="male"/>Male</label>
                    <label><input type="radion" name="gender" value="female"/>Female</label>
                </div>
                <div class="error" id="genderErr"></div>
            </div>
            <div class="row">
                <label>Hobbies<i>Option</i></label>
                <div class="form-inline">
                    <label><input type="checkbox" name="hobbies[]" value="sports"/>Sports</label>
                    <label><input type="checkbox" name="hobbies[]" value="movies"/>Movies</label>
                    <label><input type="checkbox" name="hobbies[]" value="music"/>Music</label>
                </div>
            </div>
            <div class="row">
                <input type="submit" value="submit"/>
            </div>
        </form>
        <script>
            function print(elemId,hintMsg) {
                document.getElementById(elemId).innerHtml=hintMsg;
            }
            function validateForm() {
                name=document.contactForm.name.value;
                email=document.contactForm.email.value;
                mobile=document.contactForm.mobile.value;
                country=document.contactForm.country.value;
                gender=document.contactForm.gender.value;
                hobbies=[];
                checkbox=document.getElementByName("hoddies[]");
                for(i=0;i<checkbox.length;i++){
                    if(checked[i].checked){
                        hobbies.push(checkbox[i].value);
                    }
                }
                var nameErr=emailErr=mobileErr=countryErr=genderErr=true;
                if(name==""){
                    printError("nameErr","please Enter your name");
                }
                else{
                    var regex=/n[a-zA-Z\s]+$/;
                    if(regex.test(name)==false)
                    {
                        printError("name Err","please enter valid name");
                    }
                    else{
                        printError("nameErr","");
                        nameErr=false;
                    }
                }
                if(email==""{
                    printError("emailErr","please enter your email address");
                })
                else{
                    var regex=/n\s+@\s+\.\s+$/;
                    if(regex.test(email)==false){
                        printError("emailErr","pleaseenter a vaild email address");
                    }
                    else{
                        printError("emailErr","");
                        emailErr=false;
                    }
                }
                if(mobile=""){
                    printError("mobileErr","please enter your mobile number")
                }
                else{
                    var regex=/n[1-9]\d{9}+$/;
                    if(regex.test(mobile)==false){
                        printError("mobileErr","please enter a valid 10 digit mobile number");
                    }
                    else{
                        printError("mobileErr","");
                        mobileErr=false;
                    }
                }
                if(country=="select"){
                    printError("countryErr","Please select your country");
                }
                else{
                    printError("countryErr","");
                    countryErr=false;
                }
                if(gender==""){
                    printError("genderErr","Please select your gender");
                }
                else{
                    printError("genderErr","");
                    genderErr=false;
                }
                if((nameErr||emailErr||mobileErr||countryErr||genderErr)==true){
                    return false;
                }
                else{
                    var datapreview="you are entered the following detail list"+"FullName:"+name+"\n"+"Email Address:"+email+"\n"+"Mobile:"+"\n"+"Country:"+country+"\n"+"Gender:"+gender+"\n";
                    if(hoddies.length){
                        datapreview+="Hobbies:"+hobbies.join(",");
                    }
                    alert(datapreview);
                };
            }
        </script>
    </body>
</html>