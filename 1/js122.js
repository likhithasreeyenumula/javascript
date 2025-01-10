<html>
    <head>
        <title>122</title>
        <script src=" "> </script>
        <script type="text/javascript">
            $(document).ready(function(){
                $("input").keydown(function(){
                    $("input").css("background-color","red");
                });
                $("input").keyup(function(){                    
                $("input").css("background-color","yellow");
                });
            });
        </script>
    </head>
    <body>
        Write something : <input type="text"/>
    </body>
</html>