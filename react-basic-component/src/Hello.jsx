function Hello(){
  let myName = 'Om Ganjale';
  let fullName = () => {
    return 'Om Jayram Ganjale';
  }
  let myCity = 'Pune';
  return <div>
    <p>
      hello everyone, this is {fullName()} From {myCity}
    </p>
  </div>
}

export default Hello;