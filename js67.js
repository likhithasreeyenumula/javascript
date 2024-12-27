<html>
    <head>
        <title>67</title>
    </head>
    <body onload="redirect()">
        <h2>redirect a web page after 5 sec</h2>
        <p id="result"></p>
        <script>
            function redirect()
            {
                var interval=setInterval(myURL,5000);
                var result=document.getElementById("result");
                result.inner HTML="<br> The page will redirect after delay of 5 sec setInterval method.";
            }
            function myURL(){
                document.location.href="https://www.nipunatechnologies.com";
            }
        </script>
    </body>
</html>