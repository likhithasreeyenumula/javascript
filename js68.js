<html>
    <head>
        <title>68</title>
    </head>
    <body>
        <form name="fm1" method="post">
            <label for="fname" value="" autofocus>First name:</label>
            <input type="submit" value="submit" onclick="blank()"/>
        </form>
        <script type="text/javascript">
        function blank() {
            if(document.fm1.fname.value==""){
                alert("please enter name");
            }
        }
        </script>
    </body>
</html>