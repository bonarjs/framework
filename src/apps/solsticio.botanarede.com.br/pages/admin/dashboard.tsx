import ContainerAdmin from 'src/@shared/layouts/ContainerAdmin'

import Grid from '@mui/material/Grid'
import WelcomeCard from 'src/@core/views/dashboard/WelcomeCard'
import CardNFT from 'src/@core/views/cards/CardNFT'
import CardSupport from 'src/@core/views/cards/CardSupport'
import Table from 'src/@core/views/dashboard/Table'
import { Divider } from '@mui/material'

import UserListTable from 'src/@core/views/user/list'

import SignOutButton from "src/@core/layouts/SignOutButton"
import { useEffect, useState } from 'react'

import { getContatosSolicitados } from 'src/@lib/helpers/contatoSolicitadoHelper'

import parse from 'html-react-parser'


export default function DashboardPage() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading && !users.length) {
      try {
        (async () => setUsers(await getContatosSolicitados()))()

      } catch(error) {
        console.log(error)
        let errorJson = JSON.parse('{ "error" : "<div class=\'bnr-admin-erro-acesso-negado\'>Acesso negado</div>"}')
        setUsers(errorJson)
      }
      setLoading(false)
    }
  }, [setUsers, users, loading, setLoading])
  
  return (
    <>
      <ContainerAdmin title="Bota na Rede - Painel administrativo">
        <section className="mt-6">
          <Grid container spacing={6}>
              <Grid item xs={12}>
                  <WelcomeCard />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6}>
                  <CardNFT />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                  <CardSupport />
              </Grid> */}
              <Grid item xs={12}>
                  <Divider textAlign="left" className="text-xs">SOLICITAÇÕES DE CONTATO</Divider>
                  {/* <Table /> */}

                  { users['error'] &&
                    parse(users['error'])
                  }

                  { !loading && users && !users['error'] &&
                    <UserListTable users={users} />
                  }
              </Grid>
          </Grid>
        </section>
      </ContainerAdmin>
    </>
  )
}