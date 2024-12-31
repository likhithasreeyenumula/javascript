<html>
    <head>
        <title>82</title>
    </head>
    <body>
        <h1>javascript Function</h1>
        <h2>setTimeout() with a callback</h2>
        <p>wait 3 seconds(3000 milliseconds) for the page to change.</p>
        <h1 id="demo"></h1>
        <script>
            setTimeout(myFunction,3000);
            function myFunction(){
                document.getElementById("demo").innerHTML="WELCOME!!";
            }
        </script>
    </body>
</html>