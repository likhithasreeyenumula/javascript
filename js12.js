<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex:4</title>
</head>
<body>
    <script>
        a=parseInt(prompt("enter a:"))
        b=parseInt(prompt("enter b:"))
        console.log("before swaping a=",a,"\t","b=",b)
        a=a+b
        b=a-b
        a=a-b
        console.log("after swaping a=",a,"\t","b=",b)
    </script>
</body>
</html>