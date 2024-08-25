import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../components/useForm";

function Form({ url, id, validation }) {
  const unicorn = useParams();
  const unicornId = unicorn.id;
  const navigate = useNavigate();
  const { form, getValue } = useForm({
    name: "",
    power: "",
    img: "",
    age: undefined,
  });

  const createUnicorn = function () {
    if (
      form.name != undefined &&
      form.power != undefined &&
      form.age != undefined &&
      form.img != undefined
    ) {
      axios
        .post(url, form)
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    } else {
      alert("Please complete all the entries of the form");
    }
  };

  const updateUnicorn = function (id) {
    if (
      form.name !== "" ||
      form.power !== "" ||
      form.age !== undefined ||
      form.img !== ""
    ) {
      console.log(form);
      axios
        .put(`${url}/${id}`, form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Se debe de completar al menos un campo para continuar");
    }
  };

  return (
    <form>
      <div className="form-input">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => {
            getValue(e);
          }}
          value={form.name}
          name="name"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="form-input">
        <label htmlFor="img">Image url:</label>
        <input
          onChange={(e) => {
            getValue(e);
          }}
          name="img"
          value={form.img}
          id="img"
          type="url"
          placeholder="http://image-url.com"
        />
      </div>
      <div className="form-input">
        <label htmlFor="power">Power:</label>
        <input
          onChange={(e) => {
            getValue(e);
          }}
          name="power"
          value={form.power}
          id="power"
          type="text"
          placeholder="Power"
        />
      </div>
      <div className="form-input">
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) => {
            getValue(e);
          }}
          name="age"
          value={form.age}
          id="age"
          type="Number"
          placeholder="Age"
        />
      </div>
      <div className="btn">
        <input
          onClick={() => {
            if (validation === "create") {
              createUnicorn();
            } else {
              updateUnicorn(unicornId);
            }
          }}
          className="btn-send"
          type="button"
          value="Send"
        />
      </div>
    </form>
  );
}

export default Form;
