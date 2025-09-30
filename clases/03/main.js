const PRECIOS = [111, 222, 333, 444, 555, 666, 777, 888, 999, 1000]
const IVA = 1.21

const calcularIVA = (valor) => valor * IVA

const main = () => {
    PRECIOS.forEach((element) => (
        console.log(`El precio es: ${calcularIVA(element)}.- IVA incluido.`)
    ))
}

main()