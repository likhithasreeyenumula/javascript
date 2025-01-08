<html>
    <head>
        <title>107</title>
        <style>
            p{
                color:blue;
                margin:8px;
            }
            b{
                color:red;
            }
        </style>
        <script src="js link"></script>
    </head>
    <body>
        <p><b>Hello!</b>Welcome</p>
        <p></p>
        <script>
            var str=$("p:first").text();
            $("p:last").html(str);
        </script>
    </body>
</html>