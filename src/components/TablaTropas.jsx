import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

export default function TablaTropas({ guerreros, onEliminarGuerrero }) {
  return (
    <div>
      <h3>
        Catalogo de Tropas Existentes 
      </h3>
      <TableContainer component={Paper} style={{ border: '2px solid black', marginTop: '15px' }}>
        <Table aria-label="tabla de tropas">
          <TableHead style={{ backgroundColor: '' }}>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Nombre del Guerrero</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Tipo de Guerrero</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Categoria / Rango</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Nivel</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Amenaza / Furia</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Clasificación</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guerreros.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No hay tropas registradas en el ejército.
                </TableCell>
              </TableRow>
            ) : (
              guerreros.map((g) => (
                <TableRow key={g.id}>
                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>{g.tipoGuerrero}</TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivelCombate}</TableCell>
                  <TableCell>
                    <Rating value={g.nivelAmenaza} readOnly size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={g.tipoGuerrero}
                      color={g.tipoGuerrero === 'Orco' ? 'warning' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => onEliminarGuerrero(g.id)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
