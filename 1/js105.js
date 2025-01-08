<html>
    <head>
        <title>105</title>
        <script src="js link"></script>
        <script>
            $(document).ready(function(){
                $("button").click(function(){
                    $("#div1").delay("slow").fadein();
                });
            });
        </script>
    </head>
    <body>
        <button>click me</button>
        <div id="div1" style="width:90px;height:90px;display:none;background-color:black;">
        </div><br/>
    </body>
</html>