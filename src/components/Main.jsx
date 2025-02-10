import UserList from "./UserList";
import ProductList from "./ProductList";
import User from "./User";
import Card from "./Card";
import Cart from "./Cart";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Password from "./Password";
import Greeting from "./Greeting";
import Movie from "./Movie";
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
        <Card></Card>
        <Password isValid={false}></Password>
        <Cart />
        <Weather />
        <UserStatus
          loggedIn={true}
          isAdmin={true}
        />
        <Greeting timeOfDay="afternoon" />
        <Movie />
      </p>
    </main>
  );
};

export default Main;
