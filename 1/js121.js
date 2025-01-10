<html>
    <head>
        <title>121</title>
        <srcipt src=" "></srcipt>
        <script type="text/javascript">
            $(document).ready(function(){
                $("input").keydown(function(){
                $("input").css("background-color":"blue");
            });
            $("input").keyup(function(){
                $("input").css("background-color":"red");
            });
        });
        </script>
    </head>
    <body>
        Write something: <input type="text"/>
    </body>
</html>