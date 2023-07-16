// ** React Imports
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

/* eslint-disable react/display-name */

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import ContainerAdmin from 'src/@shared/layouts/ContainerAdmin'

const AparenciaPage = () => {
  
  return (
    <>
        <ContainerAdmin title="Bota na Rede - Painel administrativo">
          <Card>
            <CardHeader title='Aparência' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      1. Informações básicas
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Título' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Descrição' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='URL' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField fullWidth label='Redes sociais' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField fullWidth label='Redes sociais' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField fullWidth label='Redes sociais' placeholder='Digite aqui' />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ marginBottom: 0 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      2. Templates
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='First Name' placeholder='Leonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Last Name' placeholder='Carter' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Username' placeholder='carterLeonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Username' placeholder='carterLeonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Username' placeholder='carterLeonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider sx={{ margin: 0 }} />
              <CardActions>
                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                  Salvar
                </Button>
                <Button size='large' color='secondary' variant='outlined'>
                  Descartar alterações
                </Button>
              </CardActions>
            </form>
          </Card>
        </ContainerAdmin>
    </>
  )
}

export default AparenciaPage

{/* <FormControl fullWidth>
  <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
  <Select
    multiple
    value={language}
    onChange={handleSelectChange}
    id='form-layouts-separator-multiple-select'
    labelId='form-layouts-separator-multiple-select-label'
    input={<OutlinedInput label='Language' id='select-multiple-language' />}
  >
    <MenuItem value='English'>English</MenuItem>
    <MenuItem value='French'>French</MenuItem>
    <MenuItem value='Spanish'>Spanish</MenuItem>
    <MenuItem value='Portuguese'>Portuguese</MenuItem>
    <MenuItem value='Italian'>Italian</MenuItem>
    <MenuItem value='German'>German</MenuItem>
    <MenuItem value='Arabic'>Arabic</MenuItem>
  </Select>
</FormControl> */}