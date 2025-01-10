<html>
    <head>
        <title>119</title>
        <style>
            p{
                margin:0;
                color:blue;
            }
            div,p{
                margin-left:10px;
            }
            span{
                color:red;
            }
        </style>
        <script src=" "></script>
    </head>
    <body>
        <p>Type 'java' to submit this form finally</p>
        <form action="javascript:alert('success!');">
            <div>
                <input type="text">
                <input type="submit">
            </div>
        </form>
        <span> </span>
        <script type="text/javascript">
            $("form").submit(function(event){
                if($("input:first").val()=="java"){
                    $("span").text("submitted success fully").show();
                    return;
                }
                $("span").text("no valid!").show().fadeout(2000);
                event.preventDefault();
            });
        </script>
    </body>
</html>