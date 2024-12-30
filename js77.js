<html>
    <head>
        <title>77</title>
    </head>
    <body>
        <h1>javascript functions</h1>
        <h2>Function sequence</h2>
        <p>javascript function are executed in the sequence they are called</p>
        <p>The result of calculation</p>
        <p id="demo"></p>
        <script>
            function myDisplayer(some){
                document.getElementById("demo").innerHTML=some;
            }
            function mycalculator(num1,num2){
                let sum=num1+num2;
                return sum;
            }
            let result=mycalculator(5,5);
            myDisplayer(result);
        </script>
    </body>
</html>