<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30</title>
</head>
<body>
    <script>
        x=[1,2,3,4,5,6,7,8,9]
        max=x[0]
        min=x[0]
        for(i=0;i<5;i++){
            console.log(x[i])
            if(x[i]>max)
            max=x[i]
        else if(x[i]<min)
        min=x[i]
        }
        console.log("max=",max)
        console.log("min=",min)        
    </script>

</body>
</html>