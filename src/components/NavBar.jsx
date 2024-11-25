import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', boxShadow: 0, zIndex: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', position: 'relative' }}>
          <IconButton edge="start" color="inherit" component={Link} to="/" sx={{ p: 0, position: 'absolute', top: '-10px' }}>
            <img src="uniesp.jpg" alt="Uniesp Logo" width={80} height={80} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 15 }}>
            <Button color="inherit" component={Link} to="/a-faculdade">
              A Faculdade
            </Button>
            <Button color="inherit" component={Link} to="/dpo-lgpd">
              DPO LGPD
            </Button>
            <Button color="inherit" component={Link} to="/noticias">
              Notícias
            </Button>
            <Button color="inherit" component={Link} to="/admin-noticias">
              Admin
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" edge="end" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/a-faculdade">
                A Faculdade
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/dpo-lgpd">
                DPO LGPD
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/noticias">
                Notícias
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/admin-noticias">
                Admin
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar