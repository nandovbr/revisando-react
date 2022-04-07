import Item from './Item';

function List () {
  return (
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="BMW" lancamento="2020" />
        <Item marca="Voltz" lancamento="2022" />
        <Item marca="Honda" lancamento="2010" />
        <Item marca="Yamaha" lancamento="2000" />
      </ul>
    </>
  );
}

export default List;
