import { Container, CssBaseline, Box } from '@mui/material'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import BannerAd from './components/BannerAd'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline></CssBaseline>
      <Container maxWidth='lg' sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        <Box display="Flex" alingItems="center" justifyContent="space-between" p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', borderShadow: '1px'}}>
          <BannerAd/>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App