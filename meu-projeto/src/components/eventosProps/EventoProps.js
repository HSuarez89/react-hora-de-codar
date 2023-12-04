import Botao from "./Botao";

var numero = 1
var paragrafo = document.createElement('p')
function contador(){
    paragrafo.innerHTML=`Evento ${numero}`    
    document.body.appendChild(paragrafo)
    numero++
}
function removerContador(){
    if(paragrafo){
    paragrafo.remove()
    numero = 1
    }
}
function EventoProps(){
    return(
        <div>
            <Botao text="Contador de Eventos" event={contador}/>
            <Botao text="Remover Contador" event={removerContador}/>
        </div>
    )
}

export default EventoProps