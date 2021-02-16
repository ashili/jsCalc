class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //Factory function: single responsibility
    static Create(a,b,op){
        return new Calculation(a,b,op);
    }

    GetResults() {
        return this.op(this.a,this.b);
    }
}
module.exports = Calculation;

