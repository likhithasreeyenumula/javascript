<html>
    <head>
        <title>116</title>
        <style src=" "></style>
        <style>
            span{
                display:none;
            }
        </style>
    </head>
    <body>
        <p><input type="text"><span>focus start....write name</span></p>
        <p><input type="password"><span>focus start....write password</span></p>
        <script type="text/javascript">
            $("input").focus(function(){
                $(this.oncontextlost("span").css("display","inline").fadeout(2000));
            });
        </script>
    </body>
</html>