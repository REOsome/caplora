class calc {
    constructor(a, b){
        this.a = a
        this.b = b 
    }
     product() {
        return this.a*this.b
    }
    div() {
        return this.a/this.b
    }

    modulus(c){
        return this.product()
    }
    dif(){
        return this.product()  - this.div()
    }
}
let ca = new calc(20, 30)

console.log(ca.dif())

 
