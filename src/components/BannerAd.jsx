import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

const StyledBannerAd = styled(Box)({
  backgroundImage: `url('https://via.placeholder.com/1200x200?text=Propaganda+Banner')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center', 
  height: '200px', 
  marginBottom: '24px',
  borderRadius: '8px' 
})

const BannerAd = () => {
  return <StyledBannerAd />
}

export default BannerAd