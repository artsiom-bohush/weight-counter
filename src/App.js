import "./App.css";
import { Form } from "./components/form/Form";
import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Table/>
    </div>
  );
};
