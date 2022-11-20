//Opps : local parameter

class Demo
{
    addData()
    {
      var a,b,c;
      a = 100;
      b = 120;
      c = a+b;

      console.log("a = " + a);
      console.log("b = " + b);
      console.log("add = " + c);

    }
}
  var obj = new Demo();
  obj.addData();