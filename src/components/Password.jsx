import ValidPassword from "./ValidPassword";
import InvalidPassword from "./InvalidPassword";

const Password = ({ isValid }) => {
  //   if (isValid) {
  //     return <ValidPassword />;
  //   }
  //   return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;
