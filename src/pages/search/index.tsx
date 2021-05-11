import React, { useState, FormEventHandler } from 'react'
import { Header, Result } from '../../components'
import api from '../../services/api'
import { Container, Content } from './styles'

export const Search: React.FC = () => {
  const [breed, setBreed] = useState('')
  const [dewormed, setDewormed] = useState(false)
  const [neutered, setNeutered] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const response = await api.get('dogs', {
      params: {
        breed,
        dewormed,
        neutered,
      },
    })

    setSearchResult(response.data)
  }

  return (
    <Container>
      <Header signed />
      <Content>
        <form onSubmit={handleSubmit}>
          <div>
            <strong>Filtros</strong>
            <select onChange={(e) => setBreed(e.target.value)}>
              <option value="">Raça</option>
              <option value="basset">Basset</option>
              <option value="buldogue">Buldogue</option>
              <option value="golden retriever">Golden Retriever</option>
              <option value="labrador">Labrador</option>
              <option value="lhasa apso">Lhasa Apso</option>
              <option value="maltes">Maltês</option>
              <option value="pastor alemão">Pastor-Alemão</option>
              <option value="pinscher">Pinscher</option>
              <option value="poodle">Poodle</option>
              <option value="pug">Pug</option>
              <option value="rottweiler">Rottweiler</option>
              <option value="schnauzer">Schnauzer</option>
              <option value="shih tzu">Shih Tzu</option>
              <option value="spitz alemão">Spitz Alemão</option>
            </select>
            <label>
              Vermifugado
              <input type="checkbox" onChange={() => setDewormed(!dewormed)} />
              <span />
            </label>
            <label>
              Castrado
              <input type="checkbox" onChange={() => setNeutered(!neutered)} />
              <span />
            </label>
          </div>
          <button type="submit">Pesquisar</button>
        </form>
        <section>
          <div className="grid">
            {searchResult.map((result: any) => (
              <Result key={result.id} data={result} />
            ))}
          </div>
        </section>
      </Content>
    </Container>
  )
}
