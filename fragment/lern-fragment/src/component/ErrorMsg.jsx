let ErrorMsg = ({items}) => {
return (
    <>
      {items.length === 0 ? <h3>I am still hungry</h3> : null}
      {items.length === 0 && <h3>I am still hungry</h3>}
    </>
  );
};
export default ErrorMsg;
