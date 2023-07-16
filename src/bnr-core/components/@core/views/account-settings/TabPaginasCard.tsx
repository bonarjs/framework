// ** React Imports
import { useState, ElementType, ChangeEvent, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button, { ButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import { House , Wrench, Image } from "phosphor-react"

export const sitePageTypes = {
    HOME : {
        title : 'Página inicial',
        icon : <House />,
        entities : null
    },
    SERVICOS : {
        title : "Serviços",
        icon : <Wrench />,
        entities : 'servicos'
    },
    GALERIA : {
        title : "Galeria",
        icon : <Image />,
        entities : 'galeria'
    }
}

// export type SitePageType = keyof typeof sitePageTypes;

const TabPaginasCard = ({ bnrtype }) => {

    let pagina

    { Object.entries(sitePageTypes).map(([key, value]) => {
        if (key == bnrtype) {
            pagina = value
        }
    }) }

    return (
        <Box className="shadow-md shadow-slate-200 hover:shadow-slate-400 rounded-md bg-gray-100" sx={{ padding: '10px', width: '100%', maxWidth: 360 }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                    <Typography className="cursor-default" gutterBottom variant="h4" component="div">
                        { pagina.title }
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                        { pagina.icon }
                    </Typography>
                    </Grid>
                </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                        Entidades
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Contato solicitado" />
                        {pagina.entities && (
                            <Chip label={pagina.entities} />
                        )}
                    </Stack>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <Button>Editar</Button>
            </Box>
        </Box>
    )
}

export default TabPaginasCard