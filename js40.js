class Bird{
    fly=()=>{
        console.log("they fly to fulfil natural activities")
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