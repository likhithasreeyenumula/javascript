<html>
    <head>
        <title>
            71
        </title>
    </head>
    <body>
        <form name="fm1">
            <label for="fage">Age:</label>
            <input type="text" name="fage"/>
            <input type="text" value="submit" onclick="allnumeric(document.fm1.fage)"/>
        </form>
        <script type="text/javascript">
        function allnumeric(inputtxt) {
            var numbers=/^xd{2}$/;
            if(inputtxt.value.match(numbers)){
                alert('your registration number has accepted............');
                document.fm1.fage.focus();
                return true;
            }
            else{
                alert('Age must be 2 digit number');
                document.fm1.fage.focus();
                return false;
            }
        }
        </script>
    </body>
</html>