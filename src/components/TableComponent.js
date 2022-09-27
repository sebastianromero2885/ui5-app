import {
  Table,
  Label,
  TableCell,
  TableColumn,
  TableRow,
  FlexBox,
  TableGrowingMode,
} from "@ui5/webcomponents-react";

import { useContext } from "react";

import "../App.css";

import MyContext from "../context/context";

export default function TableComponent() {
  const { datos_seleccionados, setdatos_seleccionados, datos } = useContext(MyContext);

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
 

  //Logica para seleccionar/des-seleccionar una fila
  function mostrarfila(fila) {
    if (!datos_seleccionados.hasOwnProperty(fila)) {
      setdatos_seleccionados({ ...datos_seleccionados, [fila]: datos[fila] });
    } else {
      const { [fila]: tmp, ...rest } = datos_seleccionados;
      setdatos_seleccionados(rest);
    }
  }

  

  return (
    <FlexBox className="DataTable">
   
        <Table
        growing={TableGrowingMode.Scroll}
        mode="MultiSelect"
        columns={
          <>
            {Object.keys(obj[1]).map((columna, index) => {
              return (
                <TableColumn key={index}>
                  <Label> {columna} </Label>
                </TableColumn>
              );
            })}
          </>
        }
        >
        {Object.keys(obj).map((fila) => {
          return (
            <TableRow
            key={fila}
            onClick={() => {
              mostrarfila(fila);
            }}
            
            >
              {Object.values(obj[fila]).map((valor_columna, indice) => {
                return(
                  <TableCell key={indice}>
                  <Label>{valor_columna}</Label>
                </TableCell>)
              })}
            </TableRow>
          );
        })}
      </Table>


</FlexBox>
);
}
