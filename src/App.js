import { Title, FlexBox, Button } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/download-from-cloud.js";
import "./App.css";
import MyContext from "./context/context";
import TableComponent from "./components/TableComponent";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function App() {
  const [datos_seleccionados, setdatos_seleccionados] = useState({});
  const [datos, setDatos] = useState({});

  useEffect(() => {
    const obj = {};
    for (let j = 1; j <= 500; j++) {
      obj[j] = {
        columna1: "Valor columna 1" + " fila " + j,
        columna2: "Valor columna 2" + " fila " + j,
        columna3: "Valor columna 3" + " fila " + j,
        columna4: "Valor columna 4" + " fila " + j,
        columna5: "Valor columna 5" + " fila " + j,
        columna6: "Valor columna 6" + " fila " + j,
        columna7: "Valor columna 7" + " fila " + j,
        columna8: "Valor columna 8" + " fila " + j,
        columna9: "Valor columna 9" + " fila " + j,
        columna10: "Valor columna 10" + " fila " + j,
      };
    }

    setDatos(obj);
  }, [setDatos]);

  var header = [];

  for (let contador = 1; contador <= 10; contador++) {
    let columna = "Columna" + " " + contador;
    header.push({ label: columna, key: "columna" + contador });
  }

  //Armo la logica, para determinar si devuelvo toda la tabla o lo seleccionado
  if (Object.keys(datos_seleccionados) == 0) {
    var datos_csv = [];
    Object.values(datos).forEach(
      (indice) => (datos_csv = datos_csv.concat(indice))
    );
  } else {
    var datos_csv = [];
    Object.values(datos_seleccionados).forEach(
      (indice) => (datos_csv = datos_csv.concat(indice))
    );
  }

  const csvReport = {
    filename: "data.csv",
    headers: header,
    data: datos_csv,
  };

  return (
    <MyContext.Provider
      value={{ datos_seleccionados, setdatos_seleccionados, datos, setDatos }}
    >
      <FlexBox direction="Column">
        <FlexBox justifyContent="Center">
          <Title className="Title">Aplicación de prueba</Title>
        </FlexBox>
        <CSVLink {...csvReport}>
          {Object.keys(datos_seleccionados) == 0 ? (
            <Button icon="download-from-cloud">Descargar tabla</Button>
          ) : (
            <Button icon="download-from-cloud">
              Descargar registros seleccionados
            </Button>
          )}
        </CSVLink>

        <TableComponent></TableComponent>
      </FlexBox>
    </MyContext.Provider>
  );
}

export default App;
