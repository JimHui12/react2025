const Cart = () => {
  const items = ["wireless", "power", "new", "hoddie"];

  function moveHandler() {
    alert('mouse move event fired')
  }

  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}
      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
      {/* <p onMouseOver={moveHandler}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime laudantium eius officia nostrum error molestias neque sequi obcaecati inventore asperiores, necessitatibus fugit, quos dolor voluptate ipsa nobis, qui voluptates. Sunt?
      </p> */}
    </div>
  );
};

export default Cart;
