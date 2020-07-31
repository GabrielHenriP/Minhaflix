
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import './style.css';
import useForm from '../../../hooks/useForm';



function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const {handleChange, values, clearForm} = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8085/categorias'
      : 'https://minhaflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServer) => {
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
          values,
        ]);

        clearForm();
      }}
      >

        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <br />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <br />
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
        <br />

        <button>
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
