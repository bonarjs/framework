import { ReactNode,useEffect,useState } from 'react';

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import WalletOutline from 'mdi-material-ui/WalletOutline'

// ** thirweb imports
// import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

interface Props {
  email: string
}

const FormLayoutsSetupInicial = ({email}: Props) => {
  let [carteiraMetamask, setCarteiraMetamask] = useState("Clique para conectar")
  let [isConnectingWallet, setIsConnectingWallet] = useState(false)

  // const connectWithMetamask = useMetamask()
  // const address = useAddress()
  // const disconnect = useDisconnect();

  // const handleConnectWithMetamask = async (e: React.SyntheticEvent) => {
  //     if (isConnectingWallet) {
  //         e.preventDefault();
  //     } else {
  //         setIsConnectingWallet(true)
  //         connectWithMetamask
  //     }
  // }

  return (
    <Card>
      <CardHeader title='Boas vindas!' titleTypographyProps={{  }} />
      <h6 className="pl-5 pb-3">Este é o seu primeiro acesso, você precisa configurar uma carteira digital para ter acesso a todos os recursos da plataforma.</h6>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
                <TextField
                  disabled={(isConnectingWallet) || isConnectingWallet }
                  fullWidth
                  type='text'
                  label='Carteira MetaMask'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <WalletOutline />
                      </InputAdornment>
                    )
                  }}
                />
                <div>
                    {/* {!address && ( */}
                        {/* <button onClick={disconnect} className="text-sm">Desconectar</button> */}
                    {/* )} */}
                </div>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsSetupInicial