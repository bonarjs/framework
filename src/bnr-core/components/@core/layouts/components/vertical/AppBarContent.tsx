// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const [language, setLanguage] = useState<string[]>([])

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        {/* <FormControl className="w-72 mt-4">
            <InputLabel id='form-layouts-separator-multiple-select-label'>Selecionar projeto</InputLabel>
            <Select
              multiple
              value={language}
              onChange={handleSelectChange}
              id='form-layouts-separator-multiple-select'
              labelId='form-layouts-separator-multiple-select-label'
              input={<OutlinedInput label='Selecionar projeto' id='btn-selecionar-projeto' />}
            >
              <MenuItem value='Jean Calhau'>Jean Calhau</MenuItem>
              <MenuItem value='FIEB'>FIEB</MenuItem>
            </Select>
          </FormControl> */}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
          </Box>
        )}
        {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
