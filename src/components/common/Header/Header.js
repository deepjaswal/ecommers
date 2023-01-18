import React from 'react'
import { Box, Grid, Container, Stack, List, ListItem, Link } from '@mui/material';
import { ImageListItem } from '@mui/material';
import MainLogo from "../../../assets/images/boat_logo_small.png"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../../Cart';

const Header = () => {
    const navigationList =
        [
            {
                name: 'CATEGORIES',
                'subDropdwom': {

                }
            },
            {
                name: 'rock in india'
            },
            {
                name: 'gift with boat'
            },
            {
                name: 'More'
            }

        ]
    return (
        <header>
            <Box sx={{ padding: "20px" }}>
                <Container fixed maxWidth="xl">
                    <Grid flexDirection='row' alignItems='center' container>
                        <Grid lg={2}>
                            <ImageListItem sx={{ width: { md: '100px' } }}>
                                <img src={MainLogo} />
                            </ImageListItem>
                        </Grid>
                        <Grid lg={10}>
                            <Stack flexDirection='row'>
                                <Grid md={8}>
                                    <List sx={{ display: 'flex' }}>
                                        {
                                            navigationList.map((value, index) => (
                                                <ListItem key={index} >
                                                    <Link to='' sx={{
                                                        fontWeight: '700',
                                                        fontSize: { lg: '18px' },
                                                        textTransform: 'uppercase',
                                                        textDecoration: 'none',
                                                        color: '#000',
                                                        cursor: 'pointer'
                                                    }}>
                                                        {value.name}</Link>
                                                </ListItem>
                                            ))
                                        }

                                    </List>
                                </Grid>
                                <Grid md={4}>
                                    <Stack flexDirection="row">
                                        <Box sx={{ width: '50%', position: 'relative' }}>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-small"
                                                defaultValue="Search Loving Excerious"
                                                variant="filled"
                                                size="small"
                                                // sx={{ width: '300px' }}
                                            />
                                            {/* <Box sx=}}>
                                                <SearchIcon/>
                                            </Box> */}

                                        </Box>
                                        <Box>
                                            <Stack flexDirection='row'>
                                                <Button sx={{color :'#000' , fontSize:'30px'}}>
                                                    <AccountCircleIcon />
                                                </Button>
                                                <Button sx={{color :'#000' , fontSize:'30px'}}>
                                                    <ShoppingCartIcon/>
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Cart/>
                </Container>
            </Box>
        </header>
    )
}

export default Header