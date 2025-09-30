const automoviles = [
    {
        marca: 'Fiat',
        modelo: 'Mobi',
        año: 2017,
        color: 'Rojo'
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2024,
        color: 'Blanco'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Gol',
        año: 2016,
        color: 'Negro'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Onix',
        año: 2017,
        color: 'Azul'
    },
    {
        marca: 'Ford',
        modelo: 'EcoSport',
        año: 2015,
        color: 'Gris'
    },
    {
        marca: 'Renault',
        modelo: 'Sandero',
        año: 2024,
        color: 'Plata'
    },
    {
        marca: 'Peugeot',
        modelo: '208',
        año: 2017,
        color: 'Amarillo'
    },
    {
        marca: 'Hyundai',
        modelo: 'Creta',
        año: 2016,
        color: 'Verde'
    },
    {
        marca: 'Nissan',
        modelo: 'Versa',
        año: 2024,
        color: 'Gris'
    },
    {
        marca: 'Honda',
        modelo: 'HR-V',
        año: 2023,
        color: 'Blanco'
    }
];
//mision 1
automoviles.forEach(a => {
    if (a.año > 2018) {
        console.log(a);
    }
})
//mision 2
const saberColor = (color) => {
    const total = automoviles.filter(a => a.color === color)
    total.length ? console.log(`En total hay ${total.length} de color ${color}`) : console.log(`No hay automoviles de ese color y esta mal escrito`)
}

saberColor('Blanco')
saberColor('blanco')