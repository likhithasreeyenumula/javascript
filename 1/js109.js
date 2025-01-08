<html>
    <head>
        <title>109</title>
        <style>
            p{
                color:red;
                margin:4px;
            }
            b{
                color:blue;
            }
        </style>
        <script src="link"></script>
        </head>
        <body>
            <p></p>
            <select id="single">
                <option>single</option>
                <option>double</option>
                <option>Triple</option>
            </select>
            <script>
                function.display vals(){
                    var singlevalues=$("#single").val();
                    $("p").html("<b>value:</b>"+single values);
                }
                $("select").change(display vals);
                display vals();
            </script>
        </body>
    
</html>