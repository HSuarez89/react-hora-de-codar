function SeuNome({setNomes}){
    return(
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Seu nome" onChange={(e) => setNomes(e.target.value)}></input>
        </div>
    )
}

export default SeuNome