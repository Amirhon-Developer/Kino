import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mura, setMura] = useState("");

  const api = "https://zmovoo.zmovo.uz/api/";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}Movies/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${api}Categorys/`)
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchText = (event) => {
    setMura(event.target.value);
  };

  const dataSearch = data.filter((el) => {
    return el.title.toLowerCase().includes(mura.toLowerCase());
  });

  return (
    <Context.Provider
      value={{
        data,
        setData,
        category,
        setCategory,
        data,
        searchText,
        dataSearch,
        mura,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
