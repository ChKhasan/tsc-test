function MethodDecorator() {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("call method 2");
    let objMethod = descriptor.value
    descriptor.value = function(...args: any) {
        console.log("dectorator this", this);
        return objMethod.apply(this, args)
    }

  };
}

class MyClass2 {
    
  @MethodDecorator()
  myMethod(a: string,b: string) {
    console.log("call method 1");
    console.log('a = ', a);
    console.log('b = ', b);
    console.log("myMethod this", this);
    
  }
}
let obj2 = new MyClass2();

obj2.myMethod("first","last")

// function MethodDecorator() {
//     return (
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) => {
//       console.log("call method 2");
//       let objMethod = descriptor.value;
//       descriptor.value = function(...args: any[]) {
//         console.log("decorator this", this); // Должен быть контекст вызова (экземпляр класса)
//         console.log("args", args); // Проверка аргументов
//         return objMethod.apply(this,args) // Применение оригинального метода с текущим контекстом и аргументами
//       };
//     };
//   }
  
//   class MyClass {
//     @MethodDecorator()
//     myMethod(a: string, b: string) {
//       console.log("call method 1");
//       console.log('a = ', a);
//       console.log('b = ', b);
//       console.log("myMethod this", this); // Должен быть экземпляр класса
//     }
//   }
  
//   let obj = new MyClass();
//   obj.myMethod("first", "last");
  