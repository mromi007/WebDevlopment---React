import styles from "./Foodinput.module.css";

const Foodinput = ({handleKeyDown}) => {
  
  return (
    <center>
      <input
        className={styles.foodInput}
        type="text"
        placeholder="Enter Your Food Item"
        onKeyDown={handleKeyDown}
      ></input>
    </center>
  );
};

export default Foodinput;
