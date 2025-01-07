<html>
    <head>
        <title>100</title>
        <script scr="js link"></script>
        <script>
            $(document).ready(function(){
                $("#flip").click(function(){
                    $("#panel").slideDown("slow");
                });
            });
        </script>
        <style>
            #panel,#flip{
                padding:5px;
                text-align:center;
                background-color:00FFFF;
                border:solid 1px#c3c3c3;
            }
            #panel{
                padding:50px;
                display:none;
            }
        </style>
    </head>
    <body>
        <div id="flip">Click to slide down panel</div>
        <div id="panel1">hello</div>
    </body>
</html>