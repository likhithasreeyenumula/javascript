<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>37</title>
</head>
<body>
    <script>
        function frlist()
        {
            console.log("Apple")
            console.log("banana")
            console.log("orange")
            console.log("grapes")
            console.log("mango")
        }
        frlist()




        console.log("--------------------------------------------------------------------------------")





        function frlist()
        {
            console.log("Apple")
            console.log("banana")
            console.log("orange")
            console.log("grapes")
            console.log("mango")
        }
        frlist()
        console.log("-------------------")
        frlist()
        console.log("-------------------")

        function mysum(){
            a=5
            b=3
            c=a+b
            console.log("sum=",c)
        }
        mysum()



        console.log("-------------------------------------------------------------")


        function mysum(x,y){
            a=x
            b=y
            c=a+b
            console.log("sum=",c)
        }
        mysum(20,10)


        console.log("--------------------------------------------------------------------")

        function myadd()
        {
            a=5
            b=3
            c=a+b
            return c
        }
        console.log("sum=",myadd(10,20))

        console.log("--------------------------------------------------------------------")

        greet=()=>{
            console.log("hai")
        }
        greet()



        console.log("--------------------------------------------------------------------")


        mysum=(a,b)=>{
            console.log(a+b)
        }
        mysum(20,10)

        console.log("--------------------------------------------------------------------")

        mysum=()=>{
            a=5
            b=3
            return a+b
        }
        console.log("sum=",mysum(20,10))

        console.log("----------------------------------------------------------------------")

        mysum=(a,b)=>{
            return a+b
        }
        console.log("sum=",mysum(20,10))

        console.log("----------------------------------------------------------------------")

        li=(x,y,z=30)=>{
            console.log(x+""+y+""+z)
        }
        li(10,20);

        console.log("------------------------------------------------------------------------")


        
    </script>
</body>
</html>