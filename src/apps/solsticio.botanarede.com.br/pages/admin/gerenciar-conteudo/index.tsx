import ContainerAdmin from 'src/@shared/layouts/ContainerAdmin'

import SignOutButton from "src/@core/layouts/SignOutButton"

// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

import { File, PuzzlePiece, Database } from "phosphor-react"

// ** Demo Tabs Imports
import TabInfo from 'src/@core/views/account-settings/TabInfo'
import TabPaginas from 'src/@core/views/account-settings/TabPaginas'
import TabSecurity from 'src/@core/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const GerenciarConteudoPage = () => {
  // ** State
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
        <ContainerAdmin title="Bota na Rede - Painel administrativo">
            <Card>
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    aria-label='account-settings tabs'
                    sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
                  >
                    <Tab
                      value='account'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <File />
                          <TabName>Páginas</TabName>
                        </Box>
                      }
                    />
                    <Tab
                      value='info'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PuzzlePiece />
                          <TabName>Componentes</TabName>
                        </Box>
                      }
                    />
                    <Tab
                      value='security'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Database />
                          <TabName>Banco de Dados</TabName>
                        </Box>
                      }
                    />
                  </TabList>

                  <TabPanel sx={{ p: 0 }} value='account'>
                    <TabPaginas />
                  </TabPanel>
                  <TabPanel sx={{ p: 0 }} value='security'>
                    <TabSecurity />
                  </TabPanel>
                  <TabPanel sx={{ p: 0 }} value='info'>
                    <TabInfo />
                  </TabPanel>
                </TabContext>
            </Card>
        </ContainerAdmin>
    </>
  )
}

export default GerenciarConteudoPage


// import ContainerAdmin from 'src/@shared/layouts/ContainerAdmin'

// import SignOutButton from "src/@core/layouts/SignOutButton"

// export default function GerenciarConteudoPage() {
//   return (
//     <>
      // <ContainerAdmin title="Botana Rede - Painel administrativo">
      //   <h6>
      //     <SignOutButton />
      //   </h6>
      //   <section className="mt-6">
      //     Content
      //   </section>
      // </ContainerAdmin>
//     </>
//   )
// }