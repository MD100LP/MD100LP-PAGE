const imagenes= document.querySelector(".img-galeria")
const imagenesLight= document.querySelector(".agregar-imagen")
const contenedorLight= document.querySelector(".imagen-light")

/*console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)*/

imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=> {
        aparecerImagen(imagen.getAtrribute("src"))
    })
    
})
imagenes.keys.forEach(imagen =>{
    imagen.addEventListener("click",()=>{
        aparecerImagen(imagen.getAtrribute("src"))
        
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show")

}
/*imagen-light
img-galeria
agregar-imagen*/