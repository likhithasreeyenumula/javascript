<html>
    <head>
        <title>81</title>
    </head>
    <body>
        <h1>javascript Functions</h1>
        <h2>callback Function</h2>
        <p>The result of the calculation is:</p>
        <p id="demo"></p>
        <script>
            function myDisplayer(something){
                document.getElementById("demo").innerHtml=something;
            }
            function mycalculator(num1,num2,mycallback){
                let sum=num1+num2;
                mycallback(sum);
            }
            mycalculator(5,5,myDisplayer);
        </script>
    </body>
</html>