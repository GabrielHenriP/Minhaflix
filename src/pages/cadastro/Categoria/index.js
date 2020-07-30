import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
import './style.css'




function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
  
  
    function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      })
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    useEffect(() => {
        const URL = 'http://localhost:8085/categorias'; 
        fetch(URL)
         .then(async (respostaDoServer) =>{
            const resposta = await respostaDoServer.json();
            setCategorias([
              ...resposta,
            ]);
         });
    }, []);
  
  
    return (
      <PageDefault>
        
        
          <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);
  
            setValues(valoresIniciais)
        }}>
          
          <h1>Cadastro de Categoria: {values.nome}</h1>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <br></br>
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          <br></br>
          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div> */}
  
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div> */}
          <br></br>
          
          <button >
            Cadastrar
          </button>
        </form>
        
        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

      </PageDefault>
    )
  }
  
  export default CadastroCategoria;