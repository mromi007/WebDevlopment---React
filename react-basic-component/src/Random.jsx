function Random(){
  let number = Math.random()*100;

  return <h5 style={{'background-color': '#0123'}}>Random Number is:{Math.round(number)}</h5>
}
export default Random;