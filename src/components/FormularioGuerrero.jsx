import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

export default function FormularioGuerrero({ onAgregarGuerrero }) {
  const [nombre, setNombre] = useState('');
  const [tipoGuerrero, setTipoGuerrero] = useState('');
  const [nivelCombate, setNivelCombate] = useState();
  const [categoria, setCategoria] = useState('');
  const [nivelAmenaza, setNivelAmenaza] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    onAgregarGuerrero({
      id: Date.now(),
      nombre,
      tipoGuerrero,
      nivelCombate,
      categoria,
      nivelAmenaza,
    });
    setNombre('');
  };

  return (
    <Card variant="outlined" style={{ border: '2px solid black' }}>
      <CardContent>
        <h2 style={{ textAlign: 'center'}}>Ingresar Guerrero</h2>
        <hr />
        <form onSubmit={handleSubmit}>

      {/* 1. Nombre del Guerrero (TextField) */}
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: 'bold' }}>Nombre del Guerrero:</label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escriba el nombre"
            />
          </div>

      {/* 2. Tipo de Guerrero (RadioGroup: Orco, Uruk) */}
          <div className="mb-3">
            <FormControl component="fieldset">
              <FormLabel style={{ fontWeight: 'bold', color: 'black' }}>Tipo de Guerrero:</FormLabel>
              <RadioGroup
                row
                name="tipoGuerrero"
                value={tipoGuerrero}
                onChange={(e) => setTipoGuerrero(e.target.value)}
              >
                <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
              </RadioGroup>
            </FormControl>
          </div>

      {/* 3. Nivel de Combate (Slider: 1 a 100) */}
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: 'bold' }}>
              Nivel de Combate (1 a 100): {nivelCombate}
            </label>
            <Slider
              value={nivelCombate}
              onChange={(_, val) => setNivelCombate(val)}
              min={1}
              max={100}
              valueLabelDisplay="auto"
            />
          </div>

      {/* 4. Categoría / Rango (Select: Capitan, Berserker, Explorador, Asediador) */}
          <div className="mb-3">
            <FormControl fullWidth size="small">
              <InputLabel id="categoria-select-label">Categoria / Rango</InputLabel>
              <Select
                labelId="categoria-select-label"
                value={categoria}
                label="Categoría / Rango"
                onChange={(e) => setCategoria(e.target.value)}
              >
                <MenuItem value="Capitán">Capitan</MenuItem>
                <MenuItem value="Berserker">Berserker</MenuItem>
                <MenuItem value="Explorador">Explorador</MenuItem>
                <MenuItem value="Asediador">Asediador</MenuItem>
              </Select>
            </FormControl>
          </div>

      {/* 5. Nivel de Amenaza / Furia (Rating: 1 a 5 estrellas) */}
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: 'bold', display: 'block' }}>
              Nivel de Amenaza / Furia (1 a 5 estrellas):
            </label>
            <Rating
              name="nivel-amenaza"
              value={nivelAmenaza}
              max={5}
              onChange={(_, val) => setNivelAmenaza(val ? Math.max(1, val) : 1)}
            />
          </div>

          {/* Botón */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Guardar Guerrero
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
