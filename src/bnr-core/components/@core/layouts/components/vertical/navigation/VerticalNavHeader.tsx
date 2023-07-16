// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'


import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/@core/config/themeConfig'

import Image from 'next/image'
import imgMarcaAdm_dark from '/public/images/marca_adm_dark.png'
import imgMarcaAdm_light from '/public/images/marca_adm_light.png'

import imgPaypal from '/public/images/cards/watch-on-hand.png'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props
  const { settings, saveSettings } = useSettings()


  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <StyledLink>
          <HeaderTitle variant='h6' className="my-5 ml-[-5px]">
              {/* <Image src={imgMarca} alt="Bota na Rede" /> */}
              
              { settings.mode == 'dark' && <Image src={imgMarcaAdm_dark} alt="Bota na Rede" width={220} /> }
              { settings.mode == 'light' && <Image src={imgMarcaAdm_light} alt="Bota na Rede" width={220} /> }

              {/* <img width={230} alt='Bota na Rede' src={`/images/marca_adm_${settings.mode}.png`} /> */}

              {/* {themeConfig.templateName} */}
          </HeaderTitle>
        </StyledLink>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
