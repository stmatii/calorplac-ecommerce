const persona = {id: 3, categoria:"Fibro", foto:'https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar//img/productos/panel_calefactor_480_w629.jpg?w=500&h=500',  kw: "420w"};

export const getFetchNuevo = new Promise((res, rej)=>{
    let respuesta = '200'
    if(respuesta === '200'){
        setTimeout(()=>{
            res(persona)
        },3000)
    }else{
        rej('404')
    }
});
