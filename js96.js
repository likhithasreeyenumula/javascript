<html>
    <head>
        <title>96</title>
        <script>
            $(document).ready(function(){
                $("#hideButton").click(function(){
                    $("#paragraph").hide(400,function(){
                        callback Function();
                    });
                });
            });
            function callback Function(){
                alert("The para is now hidden");
            }
        </script>
    </head>
    <body>
        <p id="para">This is a para</p>
        <button id="hidenButton">Hide Para</button>
    </body>
</html>