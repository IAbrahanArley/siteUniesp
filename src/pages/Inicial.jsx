import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Inicial = () => {
    return (
        <Box sx={{ p: 4, backGroundColor: '#f0f0f0', bordeRadius: '8px' }}>
            <Typography variant='h3' gutterBottom>
                Bem-vindo à universidade UNIESP
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                <Typography variant='h5' gutterBottom>
                    Sobre a universidade
                </Typography>
                <Typography variant='body1'>
                    A universidade é legal
                </Typography>
            </Paper>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fffffff', bordeRadius: '8px' }}>
                        <Typography variant='h5' gutterBottom>
                            Noticias
                        </Typography>
                        <Typography variant='body1'>
                            Fique atualizado com as ultimas noticias do dia
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fffffff', bordeRadius: '8px' }}>
                        <Typography variant='h5' gutterBottom>
                            Área Administrativa
                        </Typography>
                        <Typography variant='body1'>
                            Acesse a area adminsitativa para gerenciar noticias
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Inicial