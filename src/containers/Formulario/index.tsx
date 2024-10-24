import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
//import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    /*const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      1
    )*/
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }
  return (
    <>
      <MainContainer>
        <Titulo>Nova tarefa</Titulo>
        <Form onSubmit={cadastrarTarefa}>
          <Campo
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Titulo"
          />
          <Campo
            value={descricao}
            onChange={(evento) =>
              setDescricao(evento.target.value as 'textarea')
            }
            placeholder="Descricao da tarefa"
          />
          <Opcoes>
            <p>Prioridade</p>
            {/*<input value={enums.Prioridade.URGENTE} name="prioridade" type="radio" id="urgente" />
            <label htmlFor="urgente">Urgente</label>*/}

            {Object.values(enums.Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  onChange={(evento) =>
                    setPrioridade(evento.target.value as enums.Prioridade)
                  }
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
            {/*<input name="prioridade" type="radio" id="importante" />
            <label htmlFor="importante">Importante</label>
            <input name="prioridade" type="radio" id="normal" />
            <label htmlFor="normal">Normal</label></Form>*/}
          </Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </MainContainer>
    </>
  )
}
export default Formulario
