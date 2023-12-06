function Saudacao({nomes}){

    function gerarSaudacao(algumNome){
        return `O nome digitado é: ${algumNome}`
    }
    return(
        <><p>Este é outro componente que irá capturar o nome digitado no compontente acima e compartilhar o estado do elemento.</p>
        {nomes &&<p>{gerarSaudacao(nomes)}</p>}
        </>
    )
}

export default Saudacao