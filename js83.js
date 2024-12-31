<html>
    <head>
        <tilte>83</tilte>
    </head>
    <body>
        <h1>javascript function</h1>
        <h2>callback Functions</h2>
        <p id="demo"></p>
        <script>
            function myDisplayer(something){
                document.getElementById("demo").innerHTML=something;
            }
            function mycalculator(num1,num2,mycallback){
                let sum=num1+num2;
                mycallback(sum);
            }
            mycalculator(5,5,myDisplayer);
        </script>
    </body>
</html>