
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/imagens/creative-christians-HN6uXG7GzTE-unsplash.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>INCLUSÃO DIGITAL</h1>
          <p><strong>FUNDAÇÃO ACADEMY FUTURO tem por objetivo, oferecer acesso à internet para jovens que vivem em situação de vulnerabilidade social, com o objetivo de garantir o acesso à educação e a oportunidades de formação, inserção no mundo do trabalho e geração de renda.</strong></p>
          <p><a class="btn btn-lg btn-warning" href="projetos.js">Saiba mais</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/imagens/Jovens no computador.jpeg')}
          alt="2"
        />

        <Carousel.Caption>
          <h3>OFICINAS DE APRENDIZADO</h3>
          <p><strong>Ajuda os jovens a desenvolver as potencialidades,estimula a sensibilidade, comunicabilidade, contribui para a autoestima, propicia o desenvolvimento da consciência e respeito ao próximo.</strong></p>
          <p><a class="btn btn-lg btn-warning" href="projeto.html">Saiba mais</a></p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/imagens/kenny-eliason-zFSo6bnZJTw-unsplash.jpg')}
          alt="3"
        />

        <Carousel.Caption>
        <h1>NOSSA HISTÓRIA</h1>
          <p><strong>Como surgiu a ideia da cria Fundação Academy Futuro</strong></p>
          <p><a class="btn btn-lg btn-warning" href="historia.html">Saiba mais</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Home;