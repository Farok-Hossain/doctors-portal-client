import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image} = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
                <img 
                    style={{width: '220px', height: '250px'}} 
                    src={`data:image/jpg;base64,${image}`} alt="" />
                <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;