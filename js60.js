<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>60</title>
</head>
<body>
    <form>
        <label for="mi">Choose values:</label>
        <select id="mi" multiple onchage="dsv()">
        <Option value="pen">PEN</Option>
        <Option value="pencile">PENCILE</Option>
        <Option value="book">BOOK</Option>
        <Option value="eraser">ERASER</Option>
        <Option value="scale">SCALE</Option>
        <Option value="bag">BAG</Option>
        </select>
    </form>
    <p id="ps">selected values will be displayed here</p>
    <script>
        function dsv(){
            var x=[];
            var y=document.getElementById("mi");
            for(var i=0;i<screenY.Option.length;i++)
            {
                if(y.Option[i].selected)
                {
                    x.push(y.Option[i].value);
                }
            }
            document.getElementById("ps").innerText="selected values:"+x.join(',');
        }
    </script>
</body>
</html>