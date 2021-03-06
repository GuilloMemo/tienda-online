const productos = [
    {
        id: '123',
        nombre: 'Audifonos Sony',
        categoria: 'Accesorios',
        precio: '$150.000',
        imagen: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg',
        cantidad: 'Cantidad 8 unidades',
        descripcion: 'Audifonos inalambricos para pc o celular'

    },

    {
        id: '789',
        nombre: 'Portatil Azus',
        categoria: 'Computadores',
        precio: '$2.800.000',
        imagen: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg',
        cantidad: 'Cantidad 15 unidades',
        descripcion: 'Computador Gamer portatil y tactil, con pantalla 360 grados'  
    },

    {
        id: '456',
        nombre: 'Celular Kalley',
        categoria: 'Celulares',
        precio: '$1.115.000',
        imagen: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg',
        cantidad: 'Cantidad 5 unidades',
        descripcion: 'Celular inteligente 12 de ram, 128 de rom y octalcore de 3.2 GHZ'   
    }
]

export const llamarProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}
export const llamarProductosByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        }, 2000)
    })
}

export const llamarProductosById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 3000)
    })
}