<html>
    <head>
        <title>127</title>
        <script src=" "> </script>
        <script>
            $(document).ready(function(){
                $("#h1").mouseup(function(){
                    $("div").text("Bye Bye.....mouse up event triggered").show().fadeout(2000);
                });
            });
        </script>
    </head>
    <body>
        <h1 id="h1">Enter this</h1>
        <div></div>
    </body>
</html>