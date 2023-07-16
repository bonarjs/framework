// ** Icon imports

import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Brush from 'mdi-material-ui/Brush'
import Cart from 'mdi-material-ui/Cart'
import FileDocumentMultipleOutline from 'mdi-material-ui/FileDocumentMultipleOutline'
import CrownCircle from 'mdi-material-ui/CrownCircle'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import CardAccountPhone from 'mdi-material-ui/CardAccountPhone'
import ContentSaveCog from 'mdi-material-ui/ContentSaveCog'
import Post from 'mdi-material-ui/Post'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const bnrSiteTitulo = process.env.NEXT_PUBLIC_BNR_SITE_TITULO

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin/dashboard'
    },
    {
      sectionTitle: `Projeto: ${bnrSiteTitulo}`
    },
    {
      title: 'Gerenciar membros',
      icon: AccountCogOutline,
      path: '/admin/gerenciar'
    },
    {
      title: 'Aparência',
      icon: Brush,
      path: '/admin/aparencia'
    },
    {
      title: 'Conteúdo',
      icon: ContentSaveCog,
      path: '/admin/gerenciar-conteudo'
    },
    {
      sectionTitle: 'Atalhos'
    },
    {
      title: 'Site',
      icon: FileDocumentMultipleOutline,
      path: '/'
    }
    // {
    //   sectionTitle: 'Serviços'
    // },
    // {
    //   title: 'Marketplace',
    //   icon: Cart,
    //   path: '/admin/marketplace'
    // },
    // {
    //   title: 'Crowdfunding',
    //   icon: AccountGroup,
    //   path: '/admin/crowdfunding'
    // },
    // {
    //   title: 'Clube de assinatura',
    //   icon: CrownCircle,
    //   path: '/admin/clube-assinatura'
    // },
    // {
    //   sectionTitle: 'BNR Admin'
    // },
    // {
    //   title: 'Site institucional',
    //   icon: FileDocumentMultipleOutline,
    //   path: '/admin/bnr/paginas'
    // },
    // {
    //   title: 'NFT',
    //   icon: Post,
    //   path: '/admin/bnr/nft'
    // },
    // {
    //   title: 'Blog',
    //   icon: Post,
    //   path: '/admin/bnr/blog'
    // },
    // {
    //   title: 'Fale conosco',
    //   icon: CardAccountPhone,
    //   path: '/admin/bnr/fale-conosco'
    // }
  ]
}

export default navigation
