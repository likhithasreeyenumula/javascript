class A{
    fa(){
        console.log("A")
    }
}
class B extends A{
    fb(){
        console.log("B")
    }
}
objB=new B()
objB.fa()
objB.fb()