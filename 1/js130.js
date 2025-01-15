<html>
    <head>
        <title>130</title>
        <script src=" "> </script>
        <style>
            p{
                background:yellow;
                font-weight:bold;
                cursor:pointer;
                padding:5px;
            }
            p.over{
                background:#ccc;
            }
            span{
                color:red;
            }
        </style>
    </head>
    <body>
        <p>content....</p>
        <script>
            $("body").delegate("p","click",function(){
                $(this).after("<p>Click me for another para</p>");
            });
        </script>
    </body>
</html>