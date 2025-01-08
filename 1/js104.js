<html>
    <head>
        <script src="js link"></script>
        <script>
            $(document).ready(function(){
                $("button").click(function(){
                    $("#p1").css("color","red").slideup(2000);
                    $("#p1").css("color","red").slidedown(2000);
                });
            });
        </script>
    </head>
    <body>
        <p id="p1">Jquery is fun!!</p>
        <button>click me</button>
    </body>
</html>