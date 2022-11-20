// Overloading : Function overloading

class Add
{
    addData(...args)
    {
       var s = 0;
       for(let x of args)
       s+=x;
        console.log("add = "+s);
    }
    
}

var obj = new Add();
obj.addData(100,200);
obj.addData(100,200,300);
obj.addData(100,200,300,400);


