<html>
    <head>
        <title>
            114
        </title>
        <script src=""></script>
        <script>
            $(document).ready(function(){
                $("h3").bind("mouseover",funtion(){
                    $(this).css({"background-color":"pink","font-size":"25px"})
                    text("Hovered");
                });
                $("#b3").click(function(){
                    $("h3").unbind("mouseover");
                });
            });
        </script>
    </head>
    <body>
        <h2>it's an example of using the jquery unbind() method</h2>
        <p>Move the cursor over the below heading to attach the mouseover event</p>
        <h3>Hover me</h3>
    </body>
</html> 