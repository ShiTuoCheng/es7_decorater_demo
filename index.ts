function readonly(target:any, name:any, descriptor:any) {
  descriptor.writable = false;
  return descriptor;
}
class Cat {
  @readonly
  say() {
    console.log("meow ~ shit");
  }
}
var kitty = new Cat();
kitty.say = function() {
  console.log("woof !");
};
kitty.say(); // meow ~
