const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "laptop", price: "$899" },
    { id: 3, name: "headphones", price: "$199" },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h1>Price: {p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
