const automoviles = [
    { marca: "Toyota", modelo: "Corolla", año: 2020, color: "Blanco" },
    { marca: "Ford", modelo: "Focus", año: 2017, color: "Negro" },
    { marca: "Honda", modelo: "Civic", año: 2019, color: "Rojo" },
    { marca: "Chevrolet", modelo: "Cruze", año: 2021, color: "Azul" },
    { marca: "Nissan", modelo: "Sentra", año: 2016, color: "Blanco" },
    { marca: "Hyundai", modelo: "Elantra", año: 2022, color: "Gris" },
    { marca: "Kia", modelo: "Rio", año: 2018, color: "Rojo" },
    { marca: "Volkswagen", modelo: "Jetta", año: 2020, color: "Negro" },
    { marca: "Mazda", modelo: "3", año: 2019, color: "Blanco" },
    { marca: "Subaru", modelo: "Impreza", año: 2023, color: "Azul" }
];
//mision 1
automoviles
    .filter(auto => auto.año > 2018)
    .forEach(auto => {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
    });
//mision 2

function contarAutosPorColor(colorBuscado) {
    const total = automoviles.reduce((contador, auto) => {
        const { color } = auto;
        if (color.toLowerCase() === colorBuscado.toLowerCase()) {
            return contador + 1;
        }
        return contador;
    }, 0);

    console.log(`Hay ${total} automóvil(es) de color ${colorBuscado}.`);
    return total;
}

contarAutosPorColor('Blanco')
contarAutosPorColor('marron')