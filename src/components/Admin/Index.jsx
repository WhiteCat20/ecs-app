import React, { useEffect, useState } from "react";
import MainAdmin, { AdminTemplate } from "./Template/MainAdmin";
import axios from "axios";

const IndexAdmin = () => {
  const [memeImage, setMemeImage] = useState("");
  const memeHandler = async () => {
    const response = await axios.get(
      "https://candaan-api.vercel.app/api/image/random"
    );
    setMemeImage(response.data.data.url);
  };

  useEffect(() => {
    memeHandler();
  }, []);

  return (
    <MainAdmin>
      <h3>Selamat Datang di Dashboard Admin ECS App</h3>
      <h4>Meme receh : </h4>
      <img src={memeImage} width="500 " alt="Meme receh" />
    </MainAdmin>
  );
};

export default IndexAdmin;
