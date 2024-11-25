import { Container, CssBaseline, Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import BannerAd from './components/BannerAd'
import Login from './pages/Login';
import { Outlet } from 'react-router-dom';

import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'
import AdminNoticias from './pages/admin/AdminNoticias'
import CadastroNoticia from './pages/admin/CadastroNoticias'
import EditarNoticia from './pages/admin/EditarNoticia'

const Layout = () => {
  return (
    <div>

      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#f7f7f7',
          minHeight: '100vh',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: 1,
          }}
        >
          <NavBar />
        </Box>

        <BannerAd />

        <Box mt={4}>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#f7f7f7',
          minHeight: '100vh',
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: 1,
          }}
        >
          <NavBar />
        </Box>

        <Box mt={4}>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Inicial />} />
          <Route path="a-faculdade" element={<Faculdade />} />
          <Route path="dpo-lgpd" element={<DpoLgpd />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="visualiza-noticia/:id" element={<VisualizaNoticia />} />
          <Route path="admin-noticias" element={<AdminNoticias />} />
          <Route path="cadastrar-noticia" element={<CadastroNoticia />} />
          <Route path="editar-noticia/:id" element={<EditarNoticia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App