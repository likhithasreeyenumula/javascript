<html>
    <head>
        <title>84</title>
    </head>
    <body>
        <h1>Javascript Function</h1>
        <h2>Set TimeOut() with a callback</h2>
        <p>wait for 3 seconds(3000 milliseconds) for this page to change</p>
        <h1 id="demo"></h1>
        <script>
            set TimeOut(myFunction,3000);
            function myfunction(){
                document.getElementById("demo").innerHTML=("welcome")
            }
        </script>
    </body>
</html>