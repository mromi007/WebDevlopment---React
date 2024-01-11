import styles from "./Items.module.css";

const Item = ({ foodItem, bought, handleBuyBtn}) => {
  const handleBuyBtnClick = (event) => {
    console.log(`${foodItem} item being bought`);
    
  };
  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
