import { Box } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <Box sx={{width:'500px' , position:'fixed',right:'0px', background:'#000', padding: "20px" , color:'#fff', top:'0', height:'100vh', zIndex:'9999',display:'none'}}>
        <h1>Cart</h1>
    </Box>
  )
}

export default Cart