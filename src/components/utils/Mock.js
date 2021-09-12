const personas = [
    {id: 1, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "juan", age: 37},
    {id: 2, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "carlos", age: 27},
    {id: 3, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "ana", age: 40},
    {id: 4, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "sofia", age: 55},
    {id: 5, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "victoria", age: 11},
    {id: 6, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "federico", age: 19},
    {id: 7, foto:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1782676-44b8-492b-b964-7f211888c102/gorra-de-golf-prelavada-heritage86-jM4T9q.png', name: "pepe", age: 2},
];

export const getFetch = new Promise((resolve)=>{
    //aca tareas asincronicas
    setTimeout(()=>{
        resolve(personas)
    }, 5000)
})