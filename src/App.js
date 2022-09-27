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
    for (let j = 1; j <= 300000; j++) {
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
        columna11: "Valor columna 11" + " fila " + j,
        columna12: "Valor columna 12" + " fila " + j,
        columna13: "Valor columna 13" + " fila " + j,
        columna14: "Valor columna 14" + " fila " + j,
        columna15: "Valor columna 15" + " fila " + j,
        columna16: "Valor columna 16" + " fila " + j,
        columna17: "Valor columna 17" + " fila " + j,
        columna18: "Valor columna 18" + " fila " + j,
        columna19: "Valor columna 19" + " fila " + j,
        columna20: "Valor columna 20" + " fila " + j,
        columna21: "Valor columna 21" + " fila " + j,
        columna22: "Valor columna 22" + " fila " + j,
        columna23: "Valor columna 23" + " fila " + j,
        columna24: "Valor columna 24" + " fila " + j,
        columna25: "Valor columna 25" + " fila " + j,
        columna26: "Valor columna 26" + " fila " + j,
        columna27: "Valor columna 27" + " fila " + j,
        columna28: "Valor columna 28" + " fila " + j,
        columna29: "Valor columna 29" + " fila " + j,
        columna30: "Valor columna 30" + " fila " + j,
        columna31: "Valor columna 31" + " fila " + j,
        columna32: "Valor columna 32" + " fila " + j,
        columna33: "Valor columna 33" + " fila " + j,
        columna34: "Valor columna 34" + " fila " + j,
        columna35: "Valor columna 35" + " fila " + j,
        columna36: "Valor columna 36" + " fila " + j,
        columna37: "Valor columna 37" + " fila " + j,
        columna38: "Valor columna 38" + " fila " + j,
        columna39: "Valor columna 39" + " fila " + j,
        columna40: "Valor columna 40" + " fila " + j,
        columna41: "Valor columna 41" + " fila " + j,
        columna42: "Valor columna 42" + " fila " + j,
        columna43: "Valor columna 43" + " fila " + j,
        columna44: "Valor columna 44" + " fila " + j,
        columna45: "Valor columna 45" + " fila " + j,
        columna46: "Valor columna 46" + " fila " + j,
        columna47: "Valor columna 47" + " fila " + j,
        columna48: "Valor columna 48" + " fila " + j,
        columna49: "Valor columna 49" + " fila " + j,
        columna50: "Valor columna 50" + " fila " + j,
        columna51: "Valor columna 51" + " fila " + j,
        columna52: "Valor columna 52" + " fila " + j,
        columna53: "Valor columna 53" + " fila " + j,
        columna54: "Valor columna 54" + " fila " + j,
        columna55: "Valor columna 55" + " fila " + j,
        columna56: "Valor columna 56" + " fila " + j,
        columna57: "Valor columna 57" + " fila " + j,
        columna58: "Valor columna 58" + " fila " + j,
        columna59: "Valor columna 59" + " fila " + j,
        columna60: "Valor columna 60" + " fila " + j,
        columna61: "Valor columna 61" + " fila " + j,
        columna62: "Valor columna 62" + " fila " + j,
        columna63: "Valor columna 63" + " fila " + j,
        columna64: "Valor columna 64" + " fila " + j,
        columna65: "Valor columna 65" + " fila " + j,
        columna66: "Valor columna 66" + " fila " + j,
        columna67: "Valor columna 67" + " fila " + j,
        columna68: "Valor columna 68" + " fila " + j,
        columna69: "Valor columna 69" + " fila " + j,
        columna70: "Valor columna 70" + " fila " + j,
      };
    }

    setDatos(obj);
  }, [setDatos]);

  var header = [];

  for (let contador = 1; contador <= 70; contador++) {
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
