import axios from "axios";
// import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Container(props) {
  return <div>{props.children}</div>
}

export default function CreateDataAxios(props) {
  const access_token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  return (
    <Container>
      (
      <button
        className={props.className}
        onClick={(el) => {
          el.preventDefault();

          axios({
            method: "post",
            url: "https://kawahedukasibackend.herokuapp.com/content/create",
            data: {
              name: props.name,
              image: props.image,
              description1: props.description1,
              description2: props.description2,
              description3: props.description3,
              description4: props.description4,
            },
            headers: {
              access_token: access_token,
            },
          })
            .then((resp) => {
              console.log("Create data : success", resp.data);
              window.location.reload()

            })
            .catch(err => console.log("Create data : failed", err));
        }}
      >
        {props.label}
      </button>

    </Container>
  );
}
