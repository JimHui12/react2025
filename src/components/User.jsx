const User = ({ name, age, isMarried, hobbies }) => {
  return (
    <section>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Is married: {isMarried}</h1>
      <h1>Hobbies: {hobbies}</h1>
    </section>
  );
};

export default User;
