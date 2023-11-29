/* eslint-disable react/prop-types */
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate({ message = 'Carregando boleto, aguarde!' }) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '150px',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Montserrat',
            fontSize: '25px',
            fontWeight: '600'
        }}>

            <CircularProgress sx={{ color: 'red' }} />

            <p style={{ marginTop: '100px' }} >{message}</p>
        </Box>
    );
}