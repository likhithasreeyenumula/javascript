<html>
    <head>
        <title>79</title>
    </head>
    <body>
        <h1>javascript callback funcyion</h1>
        <p>the result of the calculate is:</p>
        <p id="demo"></p>
        <script>
            function myDisplayer(something) {
                document.getElementById("demo").innerHTML=something;

            }
            function mycalculator(num1,num2,mycallback){
                let sum=num1+num2;
                my callback(sum);
            }
            mycalculator(5,5,myDisplayer);
        </script>
    </body>
</html>