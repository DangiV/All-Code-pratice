// encapsulations : BUG

class Employee
{
    setEmployee()
    {
        this.eno= 150;
        this.enm = 'ajay';
    }

    showEmployee()
    {
        console.log("employee Details");
        console.log("Eno = "+this.eno);
        console.log("Enm = "+this.enm);
    }
}

var obj = new Employee()
obj.setEmployee();
obj.showEmployee();

