<html>
    <head>
        <title>64</title>
    </head>
    <body>
        <p>How would you like your coffee?</p>
        <form>
            <input type="radio" name="coffee" value="cream" onchange="updateOrder()">With cream<br>
            <input type="radio" name="coffee" value="sugar" onchange="updateOrder()">With sugar<br>
            <input type="text" id="order" size="50">
        </form>
        <script>
            function updateOrder() {
                var x=document.getElementByName('coffee');
                var y=Array.form(x).filter(radio=>radio.checked);
                if(y){
                    var z=y.value;
                    document.getElementById('tb').value="you ordered coffee with"+z);
                }
                else{
                    document.getElementById('z').value="";
                }
            }
        </script>
    </body>
</html>