import PropTypes from 'prop-types'

function Item({marca = 'Faltou a marca', ano_lancamento = 0}) {
    return (
        <>
            <li>
                { marca } - {ano_lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,   // obrigatória
  ano_lancamento: PropTypes.number      // opcional
}

export default Item