import './Colaborador.css'
//ao invés de usar props podemos desestruturar o props para os parametros e deixar o código mais legível, mostrando apenas o que vamos utilizar
const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador