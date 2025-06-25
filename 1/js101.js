<html>                                                                                                                                          
    <head>
        <title>101</title>
        <script src="js link"></script>
        <script>
            $(document).ready(function(){
                $("#flip").click(function(){
                    $("#panel").slideup("slow");
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
            }
        </style>
    </head>
    <body>
        <div id="flip">click to slideup</div>
        <div id="panel">HELLO</div>
    </body>
</html>
