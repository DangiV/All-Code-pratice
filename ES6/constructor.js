// opps : default constructor

class Add
{
    constructor()
    {
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }
    setAdd(a,b)
    {
        this.a= a;
        this.b= b;
    }
    addData()
    {
        this.c = this.a+this.b;
    }
    getData()
    {
       return {"a":this.a , "b":this.b , "c":this.c}
    }
}

var obj = new Add()
obj.setAdd(1000,250);
obj.addData();

var res = obj.getData();
console.log("a = "+res.a);
console.log("b = "+res.b);
console.log("add = "+res.c);

