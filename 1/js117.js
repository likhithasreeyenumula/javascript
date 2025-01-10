<html>
    <head>
        <title>117</title>
        <style>
            p{
                color:red;
            }
            div{
                color:blue;
            }
        </style>
        <script src=" "> </script>
    </head>
    <body>
        <input type="text" value="nipuna">
        <div></div>
        <script type="text/javascript">
            $("input").select(function(){
                $("div").text("some text was selected").show().fadeout(2000);
            });
        </script>
    </body>
</html>