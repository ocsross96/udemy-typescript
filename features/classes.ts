class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep');
  }
}

const motorbike = new Vehicle('orange');
console.log(motorbike.color); // orange

class Automobile extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color); // a reference to the constructor method in the parent
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const automobile = new Automobile(4, 'red');
automobile.startDrivingProcess(); // vroom vroom, beep
console.log(automobile.color); // red
