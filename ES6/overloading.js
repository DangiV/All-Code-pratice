// Overloading : Function overloading

class Add
{
    addData(a,b)
    {
        var res;
        res = a+b;
        console.log("add = "+res);
    }
    addData1(a,b,c)
    {
        var res;
        res = a+b+c;
        console.log("add = "+res);
    }
    
}

var obj = new Add();
obj.addData(100,200);
obj.addData1(100,200,300);

