import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 57, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
            style={{width: 400, marginTop: '-110px'}}
            src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          textAlign: 'left',
          alignItems: 'center'
          }}>
          <Box>
          <Typography variant="h6" sx={{ mb:5 }} style={{color: '#29F4E5'}}>
              Appoinment  
          </Typography>
          <Typography variant="h4" style={{color: 'white'}}>
              Make an Appoinment Today  
          </Typography>
          <Typography variant="h6" sx={{ my:5 }} style={{color: 'white', fontSize: 14, fontWeight: 300 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate, enim architecto officia rem sint vel quia laboriosam temporibus excepturi.  
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#29F4E5'}}>
            Learn More
          </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;