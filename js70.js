<html>
    <head>
        <title>70</title>
    </head>
    <body>
        <form name="fm1">
            <lable for="fname">Name:</lable>
            <input type="text" name="fname"/>
            <input type="submit" value="submit" onclick="all text(document.fm1.fname)"/>
        </form>
        <script type="text/javascript">
        function alltext(inputtxt){
            var text=/n[A-Za-z]+$/;
            if(inputtxt.value.match(text))
            {
                alert('your name has accepted...........');
                document.fm1.fname.focus();
                return false;
            }
        }
        </script>
    </body>
</html>