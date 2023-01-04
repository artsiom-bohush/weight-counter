import "./App.css";
import { Form } from "./components/form/Form";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
};
