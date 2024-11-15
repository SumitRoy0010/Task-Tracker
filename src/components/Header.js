import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* Reusable Components
     <Button color='blue' text='Hello 1'/>
     <Button color='red' text='Hello 2'/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//CSS in JS;
//const headingStyle = {
//color: "red",
// backgroundColor: "blue",
//};

export default Header;
