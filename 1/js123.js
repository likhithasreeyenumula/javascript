<html>
    <head>
        <title>123</title>
        <script src=" "> </script>
        <script>
            $(document).ready(function(){
                $("#h1").mouseenter(function(){
                    $("div").text("Mouse entered on heading").show().fadeout(2000);
                });
            });
        </script>
    </head>
    <body>
        <h1 id="h1">Enter the heading</h1>
        <div></div>
    </body>
</html>