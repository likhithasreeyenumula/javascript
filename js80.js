<html>
    <head>
        <title>80</title>
    </head>
    <body>
        <h1>javascript function</h1>
        <h2>callback function</h2>
        <h3>positive Number</h3>
        <p id="demo"></p>
        <script>
            const myNumbers=[4,1,-20,-7,5,9,-6];
            const poNumber=removeNeg(myNumbers,(x)=>x>=0);
            document.getElementById("demo").innerHTML=poNumber;
            function removeNeg(numbers,callback) {
                const myArray=[];
                for(const x of numbers){
                    if(callback(x)){
                        myArray.push(x);
                    }
                }
                return myArray;
            }
        </script>
    </body>
</html>