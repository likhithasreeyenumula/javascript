<html>
    <head>
        <title>76</title>
    </head>
    <body>
        <h1>javascript functions</h1>
        <h2>function sequence</h2>
        <p>javascript functions are executed in the sequence they are called</p>
        <p id="demo"></p>
        <script>
            function myDisplayer(some){
                document.getElementById("demo").innerHTML=some;
            }
            function myFirst(){
                myDisplayer("Hello");
            }
            function mysecond(){
                myDisplayer("Goodbye");
            }
            myFirst();
            mysecond();
            mysecond();
            myFirst();
        </script>
    </body>
</html>