import UserList from "./UserList";
import ProductList from "./ProductList";
import User from "./User";
import Card from "./Card";
import Cart from "./Cart";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Password from "./Password";
import Greeting from "./Greeting";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import Profile from "./Profile";
import Movie from "./Movie";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import ShoppingList from "./ShoppingList";
import CopyInput from "./CopyInput";
import { useCounterStore } from "../store/test";
import { useEffect, useState } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);
};

const Main = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    logCount();
  }, []);

  return (
    <main>
      <h2>Main Content</h2>
      
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
        <Counter />
        <ToDoList />
        <Profile />
        <Movie />
        <ComponentOne
          count={count}
          onClickHandler={() => setCount(count + 1)}
        />
        <ComponentTwo
          count={count}
          onClickHandler={() => setCount(count + 1)}
        />
        <ExampleOne />
        <ExampleTwo />
        <ShoppingList />
       
        <CopyInput/>
    </main>
  );
};

export default Main;
