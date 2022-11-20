// opps : data members (global parameter)

class Add
{
    a;
    b;
    c;
    setAdd()
    {
        this.a= 100;
        this.b= 200;
    }
    addData()
    {
        this.c = this.a+this.b;
    }
    getData()
    {
        console.log("a = "+this.a);
        console.log("b = "+this.b);
        console.log("add = "+this.c);

    }
}

var obj = new Add()
obj.setAdd();
obj.addData();
obj.getData();
