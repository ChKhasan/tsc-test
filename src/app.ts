class User {
  public name: string = "name1"
  public age: number = 1
  protected number: number = 2
  constructor() {
    this.name = "123123"
  }
  private getInfo() {
    console.log("aaaa");
    
  }
}
class UserChild extends User {
}
let obj1 = new User()

console.log(User.prototype);
console.log(UserChild.prototype);

