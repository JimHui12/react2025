import UserList from "./UserList";
import ProductList from "./ProductList";
import User from "./User";
const Main = () => {
  return (
    <main>
      <h2>Main Content</h2>
      <p>
        <UserList />
        <ProductList />
        <User
          name="lala"
          age={22}
          isMarried={false}
          hobbies={["Coding", "Readings", "Sleeping"]}
        />
      </p>
    </main>
  );
};

export default Main;
