<html>
    <head>
        <title>102</title>
        <script src="link"></script>
        <script>
            $(document).ready(function(){
                $("#flip").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });
        </script>
        <style>
            #panel,#flip{
                padding:5px;
                text-align:center;
                background-color:#00FFFF;
                border:solid 1px#c3c3c3;
            }
            #panel{
                padding:50px;
                display:none;
            }
        </style>
    </head>
    <body>
    <div id="flip">click to toggle</div>
    <div id="panel">HELLO</div>
    </body>
</html>