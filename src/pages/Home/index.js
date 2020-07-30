import React from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: '#141414'}}>
     <Menu />
     
     <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={" Os nossos cálculos mais recentes mostram que deveriam existir pelo menos 100.000 civilizações na Via Láctea. A questão que fica é: onde estão todas elas? Esse é o Paradoxo de Fermi, e nesse vídeo apresentaremos as melhores hipóteses para tentar explicar o porquê de nenhuma civilização (caso elas existam) terem feito contato com a gente ainda." }
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
