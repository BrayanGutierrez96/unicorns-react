import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import Header from "../components/Header";
import UnicornCard from "../components/UnicornCard";
import "./showUnicorn.css";

function ShowUnicorn({ url, id, update }) {
  const unicornId = useParams(id);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/${unicornId.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="body">
        <div className="main-card-show">
          <UnicornCard name={data.name} power={data.power} img={data.img} age={data.age} update={update} />
          <Form url={url} id={id} />
        </div>
      </div>
    </>
  );
}

export default ShowUnicorn;
