//  function foo(a) {
//     a = a + 1;
//      a++;
//      return a;
//  }

//     const bar = function(name) {
//     return "я анониманая функция " + name;
// }

//  console.log(foo(1));
//  console.log(bar('Тест'));

//

let user = {
    age: 23,
    name: {
        firstname: "Андрей",
        lastname: "Петров"
      },
     fun: function(years) {
          return user.age + years;
    }
}

  console.log(user.age);
  console.log(user.name.firstname + " " + user.name.lastname);
  console.log(user.fun(20));