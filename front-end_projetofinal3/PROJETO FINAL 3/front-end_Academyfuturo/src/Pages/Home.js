
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    <div class="container-fluid">
      <div class='overlay-image' >

        <Carousel   >
          <Carousel.Item>
            <img
              className="img-fluid"
              src={require('../assets/imagens/creative-christians-HN6uXG7GzTE-unsplash.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>INCLUSÃO DIGITAL</h1>
              <p><strong>FUNDAÇÃO ACADEMY FUTURO tem por objetivo, oferecer acesso à internet para jovens que vivem em situação de vulnerabilidade social, com o objetivo de garantir o acesso à educação e a oportunidades de formação, inserção no mundo do trabalho e geração de renda.</strong></p>
              <p><a class="btn btn-lg btn-warning" href="projetos">Saiba mais</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img

              src={require('../assets/imagens/Jovens no computador.jpeg')}
              alt="2"
            />

            <Carousel.Caption>
              <h3>OFICINAS DE APRENDIZADO</h3>
              <p><strong>Ajuda os jovens a desenvolver as potencialidades,estimula a sensibilidade, comunicabilidade, contribui para a autoestima, propicia o desenvolvimento da consciência e respeito ao próximo.</strong></p>
              <p><a class="btn btn-lg btn-warning" href="projetos">Saiba mais</a></p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={require('../assets/imagens/kenny-eliason-zFSo6bnZJTw-unsplash.jpg')}
              alt="3"
            />

            <Carousel.Caption>
              <h1>NOSSA HISTÓRIA</h1>
              <p><strong>Como surgiu a ideia da cria Fundação Academy Futuro</strong></p>
              <p><a class="btn btn-lg btn-warning" href="historia">Saiba mais</a></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
      <section className='bg-c'>
        <div className='bg-c1'>

          <p className='project-p'>PROJETOS</p>
          <h1 className='project-h1'>Conheça Nossos Projetos</h1>

          <div class="row">
            <div class="col-2 my-2"></div>
            <div class="button1">
              <a href="projetos" class="btn btn-dark" style={{ color: '#ef9539' }}>Clique Para Ver Mais</a></div>
            <div class="col-5 my-5"></div>
          </div>


          <center>
            <div class="row">
              <div class="col">
                <Card style={{ width: '14rem' }}>
                  <img src={require('../assets/imagens/biblioteca.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Biblioteca</Card.Title>
                    <Card.Text><p className='texto'>
                      Contamos com uma biblioteca para um ambiente de aprendizado, estudo e leitura dos jovens.
                    </p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card style={{ width: '14rem' }}>
                  <img src={require('../assets/imagens/artes_cenicas.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Artes Cênicas</Card.Title>
                    <Card.Text><p>
                      Espaço em que se privilegia o trabalho com duas linguagens das Artes Cênicas: a Dança e o Teatro.
                    </p></Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card style={{ width: '14rem' }}>
                  <img src={require('../assets/imagens/capoeira.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Capoeira</Card.Title>
                    <Card.Text><p>
                      Neste espaço, além do jogo, dança, luta, esporte, música e cultura afro.
                    </p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Card style={{ width: '14rem' }} >
                  <img src={require('../assets/imagens/aula_de_canto.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Música</Card.Title>
                    <Card.Text><p>
                      A oficina de música é mais um espaço de aprendizagem aos nossos educandos.
                    </p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card style={{ width: '14rem' }}>
                  <img src={require('../assets/imagens/formacao_profissional_de_mecanica.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Formação Profissional</Card.Title>
                    <Card.Text><p>
                      A formação profissional de jovens é uma vez por semana e é destinada para jovens maiores de 16 anos.
                    </p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card style={{ width: '14rem' }}>
                  <img src={require('../assets/imagens/mars-sector-6-7d4LREDSPyQ-unsplash.jpg')} width="222px" alt="logo" />
                  <Card.Body>

                    <Card.Title>Adolescente Aprendiz</Card.Title>
                    <Card.Text><p>
                      O projeto "adolescente aprendiz" é destinado aos atendidos de 16 a 20 anos, como uma primeira experiência de trabalho com carteira assinada.
                    </p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
            </div>
          </center>
        </div>
      </section>
      <section id='imagem' >
        <div >
          <div >
            <p className='history-p'>HISTÓRIA</p>
            <h1 className='history-h1'>Conheça Nossa História</h1>

            <div class="row">
              <div class="col-5 my-2"></div>

              <div class="button1">
                <a href="Historia" class="btn btn-dark" style={{ color: " #ef9539" }} S><strong>Clique Para Ver Mais</strong></a></div>
              <div class="col-5 my-5"></div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
    </div>


  );




}

export default Home;