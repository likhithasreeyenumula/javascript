<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>17</title>
</head>
<body>
    <script>
        year=parseInt(prompt("Enter year:"))
        if(year%400==0 && year%100!=0 || year%4==0){
            console.log("leap year")
        }
        else{
            console.log("not leap year")
        }
    </script>
</body>
</html>