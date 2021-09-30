import { mostrarMensaje } from "./mensaje"
import "./styles.scss"
const element= document.getElementById("btn-alert")
element.addEventListener("click",()=>{
    mostrarMensaje()
    alert("realizando cambios en js")
})