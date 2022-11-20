// opps : default constructor

class Add
{
    constructor(a,b,c)
    {
        this.a = a;
        this.b = b;
        this.c = c;
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

var obj = new Add(0,0,0);
obj.setAdd(1000,250);
obj.addData();

var res = obj.getData();
console.log("a = "+res.a);
console.log("b = "+res.b);
console.log("add = "+res.c);

