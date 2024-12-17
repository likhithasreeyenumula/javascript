class Bird{
    fly=()=>{
        console.log("They fly to fulfil natural activities")
    }
    buildnest=()=>{
        console.log("They build nest to live")
    }
}
parrot=new Bird()
parrot.age=5
parrot.wings=2
parrot.weight=3.4
parrot.color="Green"
console.log("Age of parrot",parrot.age)
console.log("wings of parrot",parrot.wings)
console.log("weight of parrot",parrot.weight)
console.log("color of parrot",parrot.color)
parrot.fly()
parrot.buildnest()
console.log("----------------------------------------------------------------------")
pigeon=new Bird()
pigeon.age=5
pigeon.wings=2
pigeon.weight=4.5
pigeon.color="Grey"
console.log("Age of pigeon",pigeon.age)
console.log("wings of pigeon",pigeon.wings)
console.log("weight of pigeon",pigeon.weight)
console.log("color of pigeon",pigeon.color)
pigeon.fly()
pigeon.buildnest()