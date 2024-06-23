
import React from 'react';
import Cuadro from './domesticos/Cuadro';
import Pared from './domesticos/Pared';
import Foco from './domesticos/Foco';
import AireAcondicionado from './domesticos/AireAcondicionado';

function App() {
  return (
    <div>
      <Cuadro>
        {/* Foco dentro del cuadro */}
        <Foco />
        <AireAcondicionado/>

        {/* Paredes alrededor del cuadro */}
        {/* Primera Pared vertical */}
        <Pared ancho={200} alto={7} margenDerecho={300} margenTop={0} />

        {/* Segunda Pared vertical */}
        <Pared ancho={7} alto={300} margenIzquierdo={0} margenTop={193} />

        {/* Pared horizontal */}
        <Pared ancho={300} alto={7} margenIzquierdo={0} margenTop={285} horizontal />

        {/* Pared horizontal superior */}
        <Pared ancho={210} alto={7} margenIzquierdo={0} margenTop={193} horizontal />

        {/* Pared horizontal inferior */}
        <Pared ancho={210} alto={7} margenIzquierdo={300} margenTop={193} horizontal />

        {/* Pared horizontal más abajo */}
        <Pared ancho={7} alto={200} margenIzquierdo={300} margenTop={0} horizontal />
      </Cuadro>
    </div>
  );
}

export default App;
