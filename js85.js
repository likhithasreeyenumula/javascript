<html>
    <head>
        <title>85</title>
    </head>
    <body>
        <h1>Javascript Function</h1>
        <h2>set Interval() with a callback</h2>
        <p>wait for 3 seconds(3000 milliseconds) for this page to change</p>
        <h1 id="demo"></h1>
        <script>
            setTimeOut(function()){
                myfunction("HTML");
            }3000;
            function myFunction(value){
                document.getElementById("demo").innerHTML=value;
            }
        </script>
    </body>
</html>