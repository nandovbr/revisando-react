import Item from './Item';

function List () {
  return (
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="BMW" />
        <Item marca="Voltz" />
        <Item marca="Honda" />
        <Item marca="Yamaha" />
      </ul>
    </>
  );
}

export default List;
