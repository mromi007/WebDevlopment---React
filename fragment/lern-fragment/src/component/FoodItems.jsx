import Item from "./Items";

let Foodltems = ({items}) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};
export default Foodltems;