export default function Result(props) {
  return (
    <div className="info-collection">
      <div className="info">
        <p className="info-name">City:&nbsp;</p>
        <p>{props.city}</p>
      </div>
      <div className="info">
        <p className="info-name">Country:&nbsp;</p>
        <p>{props.country}</p>
      </div>
      <div className="info">
        <p className="info-name">Lat / lon:&nbsp;</p>
        <p>
          {props.lat ? props.lat.toFixed(2) : "00"} /{" "}
          {props.lon ? props.lon.toFixed(2) : "00"}
        </p>
      </div>
    </div>
  );
}
