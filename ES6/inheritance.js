//inheritance: single leavel 

class A
{
    a = 120;
   aData()
   {
    console.log("class A, adata method invoked");
   }
}

class B extends A
{
    b= 220;
    bData()
{
    console.log("a = "+this.a);
    console.log("b = "+this.b);
    console.log("class B, bdata method invoked");
}
}

var obj = new B()
obj.aData();
obj.bData();
