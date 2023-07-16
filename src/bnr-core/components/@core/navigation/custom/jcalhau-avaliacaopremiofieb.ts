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

const bnrSiteTitulo = process.env.NEXT_PUBLIC_BNRJC_SITE_NOME

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin/dashboard'
    },
    {
      title: 'Membros',
      icon: AccountCogOutline,
      path: '/admin//membros'
    },
    // {
    //   title: 'Aparência',
    //   icon: Brush,
    //   path: '/admin/aparencia'
    // },
    {
      title: 'Conteúdo',
      icon: ContentSaveCog,
      path: '/admin/conteudo'
    },
    {
      sectionTitle: 'Atalhos'
    },
    {
      title: 'Site',
      icon: FileDocumentMultipleOutline,
      path: '/'
    }
  ]
}

export default navigation
