<html>
    <head>
        <title>88</title>
    </head>
    <body>
        <h1>JS promis object</h1>
        <h2>The then() method</h2>
        <p id="demo"></p>
        <script>
            function myDisplayer(some){
                document.getElementById("demo").innerHTML=some;
            }
            let mypromise=new promis(function(myResolve,myReject){
                let req=new XMLHTTP Request();
                req.open('GET',"mycar.html");
                req.onload=function(){
                    if(req.status==200){
                        myResolve(req response);
                    }
                    else{
                        myReject("File not Found");
                    }
                };
                req.send();
            });
            mypromise then{
                function(value){
                    myDisplayer(value);
                }
                function(error){
                    myDisplayer(error);
                }
            };
        </script>
    </body>
</html>