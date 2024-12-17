class Mycalci{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    dipvals=()=>
    {
        console.log("value a=",this.a)
        console.log("value b=",this.b)
    }
}
mc=new Mycalci(20,10)
mc.dipvals()