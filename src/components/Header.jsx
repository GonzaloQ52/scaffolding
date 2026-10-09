import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar position="static" color="black">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Anillo Único
        </Typography>
        <Typography variant="h6">
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
