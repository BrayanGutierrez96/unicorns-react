import Header from "../components/Header";
import "./getUnicorns.css";
import UnicornCard from "../components/UnicornCard";
import axios from "axios";
import { useEffect, useState } from "react";

function GetUnicorns({ url }) {
  const [data, setData] = useState([]);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setData(result.data);
        setValidation(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [validation]);
  return (
    <div>
      <Header validation={true} />
      <div className="body">
        <div className="main-card">
          {validation ? (
            data.map((unicornio) => {
              return (
                <UnicornCard
                  key={unicornio._id}
                  update={false}
                  url={url}
                  img={unicornio.img}
                  name={unicornio.name}
                  age={unicornio.age}
                  power={unicornio.power}
                  id={unicornio._id}
                />
              );
            })
          ) : (
            <div className="loading">
              <p className="text-loading">Loading </p>
              <div className="loading-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default GetUnicorns;
