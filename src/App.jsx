import { useState } from 'react';
import Header from './components/Header';
import FormularioGuerrero from './components/FormularioGuerrero';
import TablaTropas from './components/TablaTropas';

function App() {
  const [guerreros, setGuerreros] = useState([
  ]);

  const handleAgregarGuerrero = (nuevoGuerrero) => {
    setGuerreros([...guerreros, nuevoGuerrero]);
  };

  const handleEliminarGuerrero = (id) => {
    setGuerreros(guerreros.filter((g) => g.id !== id));
  };

  return (
    <div style={{ backgroundColor: '#eeeeee', minHeight: '100vh', paddingBottom: '40px' }}>
      <Header />

      <div className="container mt-4">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <FormularioGuerrero onAgregarGuerrero={handleAgregarGuerrero} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <TablaTropas guerreros={guerreros} onEliminarGuerrero={handleEliminarGuerrero} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
