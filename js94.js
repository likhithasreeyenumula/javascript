<html>
    <head>
        <title>94</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script>
            $(function(){
                $("p").hide();
                $("#show").click(function(){
                    $("p").show();
                });
            });
        </script>
    </head>
    <body>
        <p>you saw me when you click</p>
        <button id="show">Show</button>
    </body>
</html>