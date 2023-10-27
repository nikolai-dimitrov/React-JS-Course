export default function Heading(props) {
  console.log(props.children);
  return <h1 className="site-header">{props.children}</h1>;
}
