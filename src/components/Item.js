// function Item (props) {
//   return (
//     <>
//       <li>{props.marca}</li>
//     </>
//   );
// }

// export default Item;

import PropTypes from 'prop-types';

function Item ( { marca, lancamento }) {
  return (
    <>
      <li>{marca} - {lancamento}</li>
    </>
  );
}

// definindo tipo de prop para o componente
Item.propTypes = {
  marca: PropTypes.string,
  lancamento: PropTypes.number,
}.isRequired; // isRequired faz ser obrigatório ser do tipo string para "marca" e number para "lancamento"

// Item.defaultProps = {
//   marca: 'Faltou a marca do veículo',
//   lancamento: 0,
// }; // definindo valor padrão para as propriedades

export default Item;
