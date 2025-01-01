<html>
    <head>
        <tilte>86</tilte>
    </head>
    <body>
    <h1>Javascript Function</h1>
        <h2>The then() method</h2>
        <p>wait for 3 seconds(3000 milliseconds) for this page to change</p>
        <h1 id="demo"></h1>
        <script>
            const myPromise=new Promise(function(myResolve,myReject){
                setTimeout(function(){
                    setTimeout(function(){
                        myResolve("HTML");
                    }3000);
                });
                .myPromise thenfunction(value){
                    document.getElementById("demo").innerHTML=value;                
            });
        </script>
    </body>
</html>