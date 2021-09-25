const personas = [
    {id: 1, categoria:"yeso", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500', kw: "480w"},
    {id: 2, categoria:"yeso", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500', kw: "480w"},
    {id: 3, categoria:"fibro", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500',  kw: "420w"},
    {id: 4, categoria:"fibro", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500',  kw: "420w"},
    {id: 5, categoria:"baño", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500',  kw: "400w"},
    {id: 6, categoria:"baño", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500', kw: "400w"},
    {id: 7, categoria:"baño", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500', kw: "400w"},
];

// export const getFetch = new Promise((res)=>{
//     //aca tareas asincronicas
//     setTimeout(()=>{
//         res(personas)
//     }, 3000)
// })

export const getFetch = new Promise((res, rej)=>{
    let respuesta = '200'
    if(respuesta === '200'){
        setTimeout(()=>{
            res(personas)
        },1000)
    }else{
        rej('404')
    }
})


