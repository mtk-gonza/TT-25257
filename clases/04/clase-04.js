/*
Objetos Literales
Se pueden moficiar, agregar propiedades 
No funciona el ambito "this."
*/
const person_literal = {
    name: 'Jhon',
    last_name: 'Doe',
    age: '27',
    is_active: true,
    greet: function () { console.log(`Hello, I'm ${this.name}`) }
}

const person_literal2 = {
    name: 'Jhon2',
    last_name: 'Doe2',
    age: '28',
    is_active: true,
    greet: () => console.log(`Hello, I'm ${this.name}`)
}
console.log(`Accedemos a la propieda mediante "person_literal.name": ${person_literal.name}`);
console.log(`Accedemos a la propieda mediante "person_literal2['name']": ${person_literal2['name']}`);

person_literal.greet() // Hello, I'm Jhon
person_literal2.greet() // Hello, I'm undefined

/*
Objetos Funcionales 
Para agregar una propiedad PersonFunction.prototype.funcionNueva = ...
*/

function PersonFunction(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () { console.log(`Hello, I'm ${this.name} un objeto con un metodo "function"`) };
}

function PersonArrow(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => console.log(`Hello, I'm ${this.name} un objeto con un metodo "arrow"`)
        ;
}

const person3 = new PersonFunction('Cosme', 37)
const person4 = new PersonArrow('Fulanito', 38)
person3.greet();
person4.greet();

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    login(inputEmail, password) {
        return this.email === inputEmail && this.password === password
            ? "Login successful!"
            : "Invalid email or password.";
    }
}

class Seller extends User {
    constructor(name, email, password, store, sells, incomes) {
        super(name, email, password);
        this.store = store;
        this.sells = sells;
        this.incomes = incomes;
    }
}

class Buyer extends User {
    constructor(name, email, password, address, purchases, balance) {
        super(name, email, password);
        this.address = address;
        this.purchases = purchases;
        this.balance = balance;
    }
    makePurchase(amount) {
        if (this.balance >= amount) {
            this.balance -= amount; // Resta el monto del balance 
            this.purchases += 1; // Incrementa el contador de compras 
            return `Purchase successful! Remaining balance:  
               ${this.balance}`;
        } else {
            return "Insufficient balance.";
        }
    }
}
const user = new User('John', 'j@correo.com', 'jhon123'); 
const seller = new Seller('Cosme', 'c@correo.com', 'cosme123', 'centro', 0, 0); 
const buyer = new Buyer('Fulanito', 'f@correo.com', 'fulanito123', 'Calle 123', 0, 0);

user.login('j@correo.com', 'jhon123')
seller.login('c@correo.com', 'cosme123')
buyer.login('f@correo.com', 'fulanito123')

console.log(user.login('j@correo.com', 'jhon123'));
console.log(seller.login('c@correo.com', 'cosme123'));
console.log(buyer.login('fake@correo.com', 'jhon123'));