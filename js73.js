<html>
    <head>
        <title>
            73
        </title>
    </head>
    <body>
        <form name="fm1">
            <lable for="fname">Email:</lable>
            <input type="text" name="fname"/>
            <input type="submit" value="submit" onclick="validateEmail(document.fm1.fname)"/>
        </form>
        <script type="text/javascript">
        if(){
            document.fm1.fname.focus();
            return true;
        }
        else{
            alert("you have entered invalid email address!");
            document.fm1.fname.focus();
            return fasle;
        }
        </script>
    </body>
</html>