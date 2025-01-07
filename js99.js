<html>
    <head>
    <script src="js link"></script>
    <script>
        $(document).ready(function(){
            $("button").click(function(){
                $("button").click(function(){
                    $("#div1").fadeTo("slow",0.3);
                    $("#div2").fadeTo("slow",0.4);
                    $("#div3").fadeTo("slow",0.5);
                });
            });
        });
    </script>
    </head>
    <body>
        <p>see the fade to method example</p>
        <button>click to fade boxes</button><br>
        <div id="div1" style="width:80px; heigth:80px;background-color:red;"></div><br>
        <div id="div2" style="width:80px; heigth:80px;background-color:blue;"></div><br>
        <div id="div3" style="width:80px; heigth:80px;background-color:green;"></div><br>
    </body>
</html>