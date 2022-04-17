const products = [
    { 
        id: '1', 
        name: 'Todo lo que cabe en los bolsillos"', 
        price: 1300, 
        category: 'libros', 
        img:'https://imagessl8.casadellibro.com/a/l/t5/18/9788467007718.jpg', 
        stock: 25, 
        description:'Eva weber nos trae esta hermosa novela sobre la autosuperación en un contexto de extrema violencia'
    },
    { id: '2', name: 'Las flores del mal', price: 450, category: 'libro', img:'https://images.cdn3.buscalibre.com/fit-in/360x360/3b/4f/3b4f533437b9d0bd72df6bb8fd7bda20.jpg'},
    { id: '3', name: 'El señor de los anillos: trilogía', price: 5500, category: 'libro', img:'https://images.cdn3.buscalibre.com/fit-in/360x360/5c/e4/5ce4d32cd480e67925a3882a5f1f4243.jpg', stock: 10, description:'La trilogia imperdible para conocer otro fascinante mundo'}
]

const categories = [
    {id: 'libros', description: 'libros'},
    {id: 'historietas', description: 'historietas'},
    {id: 'mangas', description: 'mangas'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}