<html>
    <head>
        <title>
            73
        </title>
    </head>
    <body>
        <input type="text" id="texturl" value=""/>
        <input type="submit" value="validate" onclick="validate()"/>
        <script type="text/javascript">
        function validate(){
            var reg exp=new RegExp("http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,'\/\\\+&amp;%\$#_]*)?$");
            var url=document.getElementById("txturl").value;
            if(!regexp.test(url)){
                alert("not valid url!");
            }
            else{
                alert("valid url!");
                window.location=url
            }
        }
        </script>
    </body>
</html>