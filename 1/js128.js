<html>
    <head>
        <title>127</title>
        <script src=" "></script>
        <script>
            $(document).ready(function(){
                $("p").mouseout(function(){
                    $("p").css("background-color","green");
                });
                $("p").mouseout(function(){
                    $("p").css("background-color","blue");
                });
            });
        </script>
    </head>
    <body>
        <p>this is mouse out function</p>
    </body>
</html>