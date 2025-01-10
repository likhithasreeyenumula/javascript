<html>
    <head>
        <title>118</title>
        <style>
            p{
                color:red;
                margin:2px;
            }
            b{
                color:blue;
            }
        </style>
        <body>
        <p></p>
        <select id="single">
            <option>single</option>
            <option>Double</option>
            <option>Triple</option>
        </select>
        <script type="text/javascript">
            function display val(){
            var single values =$("#single").val();
            $("p").html("<b>value:</b>"+single value);
            }
            $("select").change(display val);
            display val();
        </script>
        </body>
    </head>
</html>