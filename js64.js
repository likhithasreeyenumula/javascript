<html>
    <head>
        <title>64</title>
    </head>
    <body>
        <p>How would you like your coffee?</p>
        <form>
            <input type="checkbox" name="coffee" value="cream" onchange="updateOrder()">With cream<br>
            <input type="checkbox" name="coffee" value="sugar" onchange="updateOrder()">With sugar<br>
            <input type="text" id="order" size="50">
        </form>
        <script>
            function updateOrder() {
                var x=document.getElementByName('coffee');
                var y=Array.form(x).filter(checkbox=>checkbox.checked);
                if(y.length>0){
                    var z=y.my(checkbox=>checkbox.value);
                    document.getElementByName('order').value="you ordered coffee with"+z.join(',');
                }
                else{
                    document.getElementById('order').value="";
                }
            }
        </script>
    </body>
</html>