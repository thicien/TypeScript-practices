class Employee {
  static totalEmployees: number = 0;
  private employeeId: number;
  protected salary: number;

  constructor(
    public name: string,
    salary: number
  ) {
    this.salary = salary;
    this.employeeId = Math.floor(Math.random() * 10000);
    Employee.totalEmployees++;
    }
    
  getDetails(): string {
    return `Name: ${this.name}, Salary: ${this.salary}`;
    }
    
  getRole(): string {
    return "Employee";
  }

  static getTotalEmployees(): number {
    return Employee.totalEmployees;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
  }

  override getRole(): string {
    return "Manager";
  }

  getDepartmentInfo(): string {
    return `${this.name} manages the ${this.department} department`;
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number, public programmingLanguage: string) {
    super(name, salary);
  }

  override getRole(): string {
    return "Developer";
  }

  getTechStack(): string {
    return `${this.name} works with ${this.programmingLanguage}`;
  }
}

const emp1 = new Manager("Thicien", 5000, "IT");
const emp2 = new Developer("Alice", 4000, "TypeScript");

console.log(emp1.getDetails());
console.log(emp2.getDetails());

console.log(emp1.getRole());
console.log(emp2.getRole());

console.log(emp1.getDepartmentInfo());
console.log(emp2.getTechStack());

console.log(Employee.getTotalEmployees());