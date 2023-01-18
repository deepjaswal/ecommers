import { Box, Button, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductCat = () => {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);
    const [productData , setProductData] = useState([])
    useEffect(() =>{
        const url=  'https://dummyjson.com/products'
        axios.get(url).then((res) => {
            setProductData(res.data.products)
        })

    },[])
    console.log(productData)
  return (
    <Box>
        <Grid container>
                {
                    productData?.map((value , index) => (
                    <Grid md={2}  sx={{padding:"10px"}}>
                        <Grid key={index} sx={{background:'#f6f6f6', padding:'20px'}} >
                            <Stack sx={{maxWidth:'100%'}}>
                                <img src={value.thumbnail}  style={{width : '100%'}}/>
                            </Stack>
                            <Stack sx={{padding : '10px 0px'}}>
                                {value.title}
                            </Stack>
                            <Grid sx={{color: '#000' , fontWeight:'700' , display:'flex' }}>
                                    <span style={{textDecoration:'line-through'}}> Rs{value.price}</span>
                                    <span className='dicountPrice' style={{color: 'red', padding:'0px 10px'}}>Rs{value.discountPercentage}</span>

                            </Grid>
                            <Grid sx={{color : '#fff', fontWeight:'700' , background:'#000', padding: '5px',margin : '10px 0px'}}>
                               Product Rating {value.rating}
                            </Grid>
                            <Grid>
                                {value.category}     <span style={{color: 'red'}}>Quantity:{value.stock} </span>
                            </Grid>
                            <Grid sx={{margin:'20px 0px'}}>
                                <Typography>
                                {value.description}
                                </Typography>
                            </Grid>
                            <Grid>
                            <Button variant="contained" color="success" sx={{fontWeight:'700'}}>
                                  Buy Now
                            </Button>
                            </Grid>

                        </Grid>
                        </Grid>
                    ))
                }
                
            
        </Grid>
    </Box>
  )
}

export default ProductCat