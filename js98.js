<html>
    <head>
        <title>98</title>
        <script src="js link"></script>
        <script>
            $(document).ready(function(){
                $("button").click(function(){
                    $("#div1").fadeToggle();
                    $("#div2").fadeToggle("show");
                    $("#div3").fadeToggle(3000);
                });
            });
        </script>
    </head>
    <body>
        <p>see the fade Toggle() method</p>
        <button>click to fade</button><br><br>
        <div id="div1" style="width:80px; heigth:80px;background-color:red;"></div><br>
        <div id="div2" style="width:80px; heigth:80px;background-color:blue;"></div><br>
        <div id="div3" style="width:80px; heigth:80px;background-color:green;"></div><br>
    </body>
</html>