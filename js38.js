<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>38</title>
</head>
<body>
    <script>
        class IceCream{
            melt=()=>{
                console.log("melt at room temp")
            }
        }
        vanilla=new IceCream()
        vanilla.melt()

        console.log("-------------------------------------------------------")

        class Bird{
            fly=()=>{
                console.log("They fly to fulfil natural activities")
            }
        }
        parrot=new Bird()
        parrot.fly()
        console.log("---------------")
        pigeon=new Bird()
        pigeon.fly()

        console.log("---------------------------------------------------------------")

        class Bird{
            fly=()=>{
                console.log("They fly to fulfil natural activities")
            }
            buildnest=()=>{
                console.log("they build nest to live");
            }
        }
        parrot=new Bird()
        parrot.fly()
        parrot.buildnest()
        console.log("-----------")
        pigeon=new Bird()
        pigeon.fly()
        pigeon.buildnest()

        console.log("-------------------------------------------------------------------------")

        class Bird{
            fly=()=>{
                console.log("They fly to fulfil natural activities")
            }
        }
        parrot=new Bird()
        parrot.age=5
        parrot.wings=2
        parrot.weight=3.4
        parrot.color="green"
        console.log("Age of parrot=",parrot.age)
        console.log("wings of parrot=",parrot.wings)
        console.log("weight of parrot=",parrot.weight)
        console.log("color of parrot=",parrot.color)
        parrot.fly()
        parrot.buildnest()
        console.log("---------------------")
        pigeon=new Bird()
        pigeon.age=7
        pigeon.wings=2
        pigeon.weight=4.5
        pigeon.color="Grey"
        console.log("Age of pigeon=",pigeon.age)
        console.log("wings of pigeon=",pigeon.wings)
        console.log("weight of pigeon=",pigeon.weight)
        console.log("color of pigeon=",pigeon.color)
        pigeon.fly()
        pigeon.buildnest()

        console.log("--------------------------------------------------------")

        console.log("--------------------------------------------------------------")
    </script>
</body>
</html>