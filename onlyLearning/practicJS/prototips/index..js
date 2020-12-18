// Есть у нас такой код

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

// Поменяли строчку...

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // ...вот эту

alert( rabbit.eats ); // стало true.
// Присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.

// Поменяли строчку...

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // ...вот эту

alert( rabbit.eats ); // false
// Объекты присваиваются по ссылке. Не создаётся копия Rabbit.prototype, это всегда один объект, на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.
//
// Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.

// Поменяли строчку...

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; // ...вот эту

alert( rabbit.eats ); // true
// Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.

// Поменяли строчку...

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // ...вот эту

alert( rabbit.eats ); // undefined
// Свойство eats удалено из прототипа, оно больше не существует.
