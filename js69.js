<html>
    <head>
        <title>69</title>
    </head>
    <body>
        <form name="fm1">
            <label for="fage">Age:</label>
            <input type="text" name="fage"/>
            <input type="submit" value="submit" onclick="all numeric(document.fm1.fpage)"/>
        </form>
        <script type="text/javascript">
        function allnumeric(inputtxt){
            var numbers=/^[0-9]+$/;
            if(inputtxt.value.match(numbers)){
                alert('age is valid number.............');
                document.fm1.fage.focus();
                return true;
            }
            else{
                alert('please input numeric only');
                document.fm1.fage.focus();
                return false;
            }
        }
        </script>
    </body>
</html>