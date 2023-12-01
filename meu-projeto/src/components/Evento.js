function Evento(){
    var numero = 1
    function meuEvento(){
        console.log(`Fui ativado ${numero} vezes.`)
        numero++
    }

    return(
        <>
        <p>Clique para disparar o evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento