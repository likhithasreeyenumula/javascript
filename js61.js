<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>57</title>
    <style type="text/css">
    body{
        font-family:Arial;
        display:flex;
        align-item:center;
        justify-content:center;
        background-color:pink;
        margin:50px;
    }
    .container{
        background-color:#008080;
        pading:25px 40px 25px 15px;
        border-radious:10px;
        text-align:start;
        width:300px;
    }
    input{
        padding:10px;
        width:100%;
        margin-bottom:20px;
        border:1px solid red;
        border-radious:4px;
    }
    button{
        padding:10px 20px;
        background-color:#007bff;
        color:#fff
        border:none;
        border-radious:4px;
        cursor:pointer;
    }
    #result{
        margin-top:20px;
        font-size:1.2em;
        color:#333;
    }
    </style>
    </head>
    <body>
        <div class="container">
            <h2>Electricity bill calculator</h2>
            <label for="units">Enter Electricity units</label>
            <input type="number" id="units" placeholder="Enter no.of units" min="0">
            <button onclick="calculte bill()">calculte Bill</button>
            <p id="result"></p>
        </div>
        <script>
            function calculte bill() {
                units=parseFloat(document.getElementById('units',value));
                bill=0;
                if(units<=50){
                    bill=units<=*0.50;
                }
                elseif(units<=150){
                    bill=(50*0.05)+((unit-50)*0.75);
                }
                elseif(units<=250){
                    bill=(50*0.50)+(100*0.75)+((units-150)*1.20);
                }
                else{
                    bill=(50*0.50)+(100*0.75)+((units-250)*1.20);
                }
                surcharge=bill*0.20;
                total bill=bill+surcharge;
                document.getElementById('result').innerText='Total Electricity Bill:Rs.${total Bill.to string()}';
            }
            
        </script>
    </body>
</html>