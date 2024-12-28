<html>
    <head>
        <title>74</title>
    </head>
    <body>
        <h2>Input credit card No.[starting with 34 or 37,length 15 digital(American Express)and submit]</h2>
        <form name="form1" action="#">
        <input type="text" name="text1" autofocus/>
        <input type="submit" name="submit" value="submit" onclick="cardnumber(document.form1.text1)"/>
        </form>
    </body>
    <script>
        function cardnumber(inputtxt) {
            var cardno=/^(?:3[47][0-9]{13})$/;
            if(inputtxt.value.match(cardno)){
                alert("your card is valid");
                return true;
            }
            else{
                alert("Not a valid Amercican Express credit card number1");
                return false;
            }
        }
    </script>
</html>