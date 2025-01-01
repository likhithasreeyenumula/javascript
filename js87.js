<html>
    <head>
        <title>87</title>
    </head>
    <body>
        <h2>Javascript callback</h2>
        <p id="demo"></p>
        <script>
            function myDisplayer(some){
                document.getElementById("demo").innerHTML=some;
            }
            function getFile(mycallback){
                let req=new XMLHttpRequest();
                .reg.onload=function(){
                    if(reg.satus==200){
                        mycallback(this.responseText);
                    }
                    else{
                        mycallback("Error:"+req.status);
                    }
                }
                reg.open('GET',"mycar.html");
                reg.send();
            }
            getFile(myDisplayer);
        </script>
    </body>
</html>