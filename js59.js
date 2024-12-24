<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>59</title>
</head>
<body>
    <label>Item</label>
    <select id="mysp" onchange="mys()">
        <Option value="pen">PEN</Option>
        <Option value="pencile">PENCILE</Option>
        <Option value="book">BOOK</Option>
        <Option value="eraser">ERASER</Option>
        <Option value="scale">SCALE</Option>
        <Option value="bag">BAG</Option>        
    </select>
    <script type="text/javascript">
    function mys(){
        x=document.getElementById("mysp").value
        document.getElementById("ps").innerText=x
    }    
    </script>
    <br><br>
    <table>
        <tr>
            <td>
                your selection=
            </td>
        </tr>
        <tr>
            <td>
                <p id="ps"></p>
            </td>
        </tr>
    </table>
</body>
</html>