import img from "../img/Vector.svg"

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input className="form-input" type="text" name="city" placeholder="Enter a city"/>
      <button className="form-btn">
        <img className="form-img" src={img} />
      </button>
    </form>
  );
}
