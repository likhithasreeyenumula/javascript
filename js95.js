<html>
    <head>
        <title>94</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script>
        $(document).ready(function(){
            $("#hide").click(function(){
                $("p").hide();
            });
            $("#show").click(function(){
                $("p").show();
            });
        });
        </script>
    </head>
    <body>
        <p><b>This is a little pome:</b>
        Twinkle,Twinkle,little<br/>
        how I wonder what you are</p>
        <button id="hide">Hide</button>
        <button id="show">Show</button>
    </body>
</html>