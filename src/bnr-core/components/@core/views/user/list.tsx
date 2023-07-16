// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'

import TableRow from '@mui/material/TableRow'

import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

import RemoveCircle from '@mui/icons-material/RemoveCircle'
import CheckCircle from '@mui/icons-material/CheckCircle'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'


import { setContatoSolicitadoDelivered, removeContatoSolicitado } from 'src/@lib/helpers/contatoSolicitadoHelper'
import { useState, useEffect } from 'react'
import { IconButton, Tooltip } from '@mui/material'

import { useConfirm } from "material-ui-confirm";

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const statusObj: StatusObj = {
  solicitado: { color: 'warning' },
  respondido: { color: 'success' }
  // current: { color: 'primary' },
  // resigned: { color: 'error' },
  // professional: { color: 'info' }
}



const UserListTable = ({ users }) => {
  const [contatosSolicitados, setContatosSolicitados] = useState([])

  useEffect(() => {
    
    setContatosSolicitados(users)

  }, [setContatosSolicitados, users])

  const updateState = (status, contatoSolicitadoId) => {
    const newState = contatosSolicitados.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === contatoSolicitadoId) {
        return {...obj, isDelivered: status}
      }

      // 👇️ otherwise return the object as is
      return obj
    })

    setContatosSolicitados(newState)
  }

  const removeState = (id) => {
    const data = contatosSolicitados.filter((obj) => obj.id !== id);
    setContatosSolicitados(data);
  }
  
  const setDelivered = (status, row) => {
    updateState(status, row.id)
    setContatoSolicitadoDelivered(status, row.id)
  }

  const confirm = useConfirm();

  const removeContatoSelecionadoById = (e, contatoSolicitadoId) => {
    confirm({ description: "Tem certeza que deseja excluir solicitação de contato?" })
      .then(() => {
        const element = e.target.parentNode.parentNode.parentNode

        setTimeout(function(){
          element.classList.add('bnr-css-listagem-remover-item')
        }, 500);

        setTimeout(function(){
          element.classList.remove('bnr-css-listagem-remover-item')
          removeState(contatoSolicitadoId)
        }, 1000);
        
        removeContatoSolicitado(contatoSolicitadoId)
      })
      .catch(() => {
        return false
      });
  }

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Criado em</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contatosSolicitados.map((row) => (
              <TableRow key={row.id} hover sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>{row['nome']}</TableCell>
                <TableCell>{row['telefone']}</TableCell>
                <TableCell>
                  {row['created_at']
                    .toDate()
                    .toLocaleString(
                      'pt-BR',
                      {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}
                    )
                  }
                  </TableCell>
                <TableCell align='center'>
                  <Chip
                    label={row.isDelivered ? 'respondido' : 'solicitado'}
                    color={statusObj[row.isDelivered ? 'respondido' : 'solicitado'].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Excluir solicitação de contato" arrow>
                    <RemoveCircle onClick={(e) => removeContatoSelecionadoById(e, row.id)} className="mr-5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Marcar como respondido" arrow>
                    <CheckCircle onClick={() => setDelivered(true, row)} className={`cursor-pointer ${row.isDelivered && "hidden"}`} />
                  </Tooltip>
                  <Tooltip title="Marcar como não respondido" arrow>
                    <CheckCircleOutline onClick={() => setDelivered(false, row)} className={`cursor-pointer ${!row.isDelivered && "hidden"}`} />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default UserListTable