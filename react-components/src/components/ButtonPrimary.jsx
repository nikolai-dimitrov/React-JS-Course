function ButtonPrimary(props) {
  return <button onClick={props.clickHandler}>{props.children}</button>;
}
export default ButtonPrimary;
