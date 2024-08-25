import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./unicornCard.css";


function UnicornCard({ url, img, name, power, age, update, id }) {
  const navigate = useNavigate();


  const deleteUnicorn = function (uniconrId) {
    axios
      .delete(`${url}/${uniconrId}`)
      .then(() => {
      navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {update ? (
        <div className="card">
          <div className="card-img">
            <img className="img-card" src={img} alt="" />
          </div>
          <div className="title-card">
            <h3 className="name">Name: {name}</h3>
          </div>
          <div className="description-card">
            <p className="power">Power: {power}</p>
          </div>
          <div className="description-card">
            <p className="age">Age: {age}</p>
          </div>
          <div className="btn-card">
            <Link
              to="/unicorns"
              className="btn-show-card"
              style={{
                background: "rgba(67, 111, 150, 0.651)",
                color: "white",
              }}
            >
              Back
            </Link>
          </div>
        </div>
      ) : (
        <div className="card" key={id}>
          <div className="card-img">
            <img className="img-card" src={img} alt="" />
          </div>
          <div className="title-card">
            <h3 className="name">Name: {name}</h3>
          </div>
          <div className="description-card">
            <p className="power">Power: {power}</p>
          </div>
          <div className="description-card">
            <p className="age">Age: {age}</p>
          </div>
          <div className="btn-card">
            <Link to={`/show-unicorn/${id}`} className="btn-show">
              Show
            </Link>
            <button
              className="btn-show delete"
              onClick={() => {
                deleteUnicorn(id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UnicornCard;
