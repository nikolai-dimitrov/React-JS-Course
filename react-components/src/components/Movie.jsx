export default function Movie(props) {
  return (
    <li>
      <h3>{props.data.title}</h3>
      <p>Year: {props.data.year}</p>
      <p>Desc: {props.data.description}</p>
    </li>
  );
}
