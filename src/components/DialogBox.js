import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DialogBox({open,handleClose}) {
 
  let navigate = useNavigate();

  const handleClick = () => {
  navigate('/checkout')
 }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{fontWeight:'bold'}}>
        Your Order Summary

        </DialogTitle>
        <DialogContent  sx={{width:'500px'}}>
          <DialogContentText id="alert-dialog-description">

        <ul>
          <li>Bacon :0</li>
          <li>Cheese :0</li>
          <li>Salad :0</li>
          <li>Meat :0</li>
          
        </ul>
        <Typography variant='body1'>Do you want to checkout?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' color='error'>Dismiss</Button>
          <Button onClick={handleClick} variant='outlined' color='success'>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
