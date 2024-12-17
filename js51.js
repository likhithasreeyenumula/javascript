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
class C extends A{
    fc(){
        console.log("C")
    }
}
objB=new B()
objB.fa()
objB.fb()
console.log("-----------------------------------------")
objC=new C()
objC.fa()
objC.fc()
console.log("-----------------------------------------")
objD=new D()
objD.fa()
objD.fd()