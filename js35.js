<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>33</title>
</head>
<body>
    <script>
        x=["apple","banana","carrot","dog","egg","fig","grapes","hat"]
        y=['a','b','c','d','e','f','g','h']
        z=[1,2,3,4,5]
        console.log(x)
        x.push("inkpen")
        console.log(x)
        x.pop()
        console.log(x)
        x.shift()
        console.log(x)
        console.log(x.includes("juice"))
        console.log(x.indexOf("banana"));
        x.reverse()
        console.log(x)
        x.fill("nipuna")
        console.log(x)
        y=x.concat(y)
        console.log(y)
        y=x.join("-")
        console.log(y)
        console.log(x.at(2))        
    </script>
</body>
</html>