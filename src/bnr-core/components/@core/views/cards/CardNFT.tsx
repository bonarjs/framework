// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardNFT = () => {
  return (
    // <Card sx={{ height: '18.8rem' }}>
    <Card className="min-h-[18.7rem]">
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.png' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 1 }}>
          Pacote NFT utilitário 
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>R$49</Typography>
        <Typography variant='body2' sx={{ marginBottom: 0 }}>
          100 tokens para distribuição entre os seus maiores fãs
        </Typography>
      </CardContent>
      {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Add To Cart
      </Button> */}
      <Button className="w-full text-white hover:bg-marca-800" sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Comprar
      </Button>
    </Card>
  )
}

export default CardNFT
