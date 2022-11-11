import React, { Component } from 'react'
import CadastroService from '../services/CadastroService';
class CreateCadastroComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cod_pessoa: this.props.match.params.cod_pessoa,
      nome: '',
      dataNascimento: '',
      cidade: '',
      cpf: '',
      endereço: '',
      bairro: '',
      estado: '',
      cep: '',
      celular: '',
      email: '',
      senha: '',
      escolha_voluntario: '',
      escolha_participante: ''
    }
    this.changenomeHandler = this.changenomeHandler.bind(this);
    this.changedataNascimentoHandler = this.changedataNascimentoHandler.bind(this);
    this.changecidadeHandler = this.changecidadeHandler.bind(this);
    this.changecpfHandler = this.changecpfHandler.bind(this);
    this.changeendereçoHandler = this.changeendereçoHandler.bind(this);
    this.changebairroHandler = this.changebairroHandler.bind(this);
    this.changeestadoHandler = this.changeestadoHandler.bind(this);
    this.changecepHandler = this.changecepHandler.bind(this);
    this.changecelularHandler = this.changecelularHandler.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changesenhaHandler = this.changesenhaHandler.bind(this);
    this.changeescolha_voluntarioHandler = this.changeescolha_voluntarioHandler.bind(this);
    this.changeescolha_participanteHandler = this.changeescolha_participanteHandler.bind(this);
    this.saveOrUpdateCadastro = this.saveOrUpdateCadastro.bind(this);
    console.log('criado');

  }
  componentDidMount() {
    if (this.state.cod_pessoa === '_add') {
      return
    } else {
      CadastroService.getCadastroById(this.state.cod_pessoa).then((res) => {
        let cadastro = res.data;
        this.setState({
          cod_pessoa: cadastro.cod_pessoa, nome: cadastro.nome, dataNascimento: cadastro.dataNascimento, cidade: cadastro.cidade, cpf: cadastro.cpf, endereço: cadastro.endereço,
          bairro: cadastro.bairro, estado: cadastro.estado, cep: cadastro.cep, celular: cadastro.celular, email: cadastro.email, senha: cadastro.senha, escolha_voluntario: cadastro.escolha_voluntario, escolha_participante: cadastro.escolha_participante
        });
      });
    }
  }
  saveOrUpdateCadastro = (func) => {
    func.preventDefault();
    let cadastro = {
      nome: this.state.nome, dataNascimento: this.state.dataNascimento, cidade: this.state.cidade, cpf: this.state.cpf,
      endereço: this.state.endereço, bairro: this.state.bairro, estado: this.state.estado, cep: this.state.cep, celular: this.state.celular, email: this.state.email, senha: this.state.senha, escolha_voluntario: this.state.escolha_voluntario, escolha_participante: this.state.escolha_participante
    };
    console.log('cadastro => ' + JSON.stringify(cadastro));
    if (this.state.cod_pessoa === '_add') {
      CadastroService.createCadastro(cadastro).then(res => {
        this.props.history.push('/cadastros');
      });
    } else {
      CadastroService.updateCadastro(cadastro, this.state.cod_pessoa).then(res => {
        this.props.history.push('/cadastros');
      });
    }
  }
  changenomeHandler = (event) => {
    this.setState({ nome: event.target.value });
  }

  changedataNascimentoHandler = (event) => {
    this.setState({ dataNascimento: event.target.value });
  }

  changecidadeHandler = (event) => {
    this.setState({ cidade: event.target.value });
  }

  changecpfHandler = (event) => {
    this.setState({ cpf: event.target.value });
  }

  changeendereçoHandler = (event) => {
    this.setState({ endereço: event.target.value });
  }

  changebairroHandler = (event) => {
    this.setState({ bairro: event.target.value });
  }

  changeestadoHandler = (event) => {
    this.setState({ estado: event.target.value });
  }

  changecepHandler = (event) => {
    this.setState({ cep: event.target.value });
  }

  changecelularHandler = (event) => {
    this.setState({ celular: event.target.value });
  }

  changeemailHandler = (event) => {
    this.setState({ email: event.target.value });
  }
  changesenhaHandler = (event) => {
    this.setState({ senha: event.target.value });
  }
  changeescolha_voluntarioHandler = (event) => {
    this.setState({ escolha_voluntario: event.target.value });
  }

  changeescolha_participanteHandler = (event) => {
    this.setState({ escolha_participante: event.target.value });
  }
  cancel() {
    this.props.history.push('/cadastros');
  }
  getTitle() {
    if (this.state.cod_pessoa === '_add') {
      return <h3 className="text-center">Inserir Cadastro</h3>
    } else {
      return <h3 className="text-center">Alterar Cadastro</h3>
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> nome: </label>
                    <input placeholder="nome" name="nome" className="form-control"
                      value={this.state.nome}
                      onChange={this.changenomeHandler} />

                  </div>

                  <div className="form-group">
                    <label> dataNascimento: </label>
                    <input placeholder="dataNascimento" name="dataNascimento" className="form-control" value={this.state.dataNascimento} onChange={this.changedataNascimentoHandler} />

                  </div>

                  <div className="form-group">
                    <label> cidade: </label>
                    <input placeholder="cidade" name="cidade" className="form-control" value={this.state.cidade} onChange={this.changecidadeHandler} />

                  </div>

                  <div className="form-group">
                    <label> cpf: </label>
                    <input placeholder="cpf" name="cpf" className="form-control" value={this.state.cpf} onChange={this.changecpfHandler} />

                  </div>

                  <div className="form-group">
                    <label> endereço: </label>
                    <input placeholder=" endereço" name=" endereço" className="form-control" value={this.state.endereço} onChange={this.changeendereçoHandler} />

                  </div>

                  <div className="form-group">
                    <label> bairro: </label>
                    <input placeholder="bairro" name="bairro" className="form-control" value={this.state.bairro} onChange={this.changebairroHandler} />

                  </div>

                  <div className="form-group">
                    <label> estado: </label>
                    <input placeholder="estado" name="estado" className="form-control" value={this.state.estado} onChange={this.changeestadoHandler} />

                  </div>

                  <div className="form-group">
                    <label> cep: </label>
                    <input placeholder="cep" name="cep" className="form-control" value={this.state.cep} onChange={this.changecepHandler} />

                  </div>

                  <div className="form-group">
                    <label> celular: </label>
                    <input placeholder="celular" name="celular" className="form-control" value={this.state.celular} onChange={this.changecelularHandler} />

                  </div>

                  <div className="form-group">
                    <label> email: </label>
                    <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.changeemailHandler} />

                  </div>

                  <div className="form-group">
                    <label>senha: </label>
                    <input placeholder="senha" name="senha" className="form-control" value={this.state.senha} onChange={this.changesenhaHandler} />

                  </div>

                  <div className="form-group">
                    <label> escolha_voluntario : </label>
                    <input placeholder="escolha_voluntario" name="escolha_voluntario " className="form-control" value={this.state.escolha_voluntario} onChange={this.changeescolha_voluntarioHandler} />

                  </div>

                  <div className="form-group">
                    <label> escolha_participante: </label>
                    <input placeholder="escolha_participante" name="escolha_participante" className="form-control" value={this.state.escolha_participante} onChange={this.changeescolha_participanteHandler} />

                  </div>
                  <br/>
                  <button className="btn btn-success" onClick={this.saveOrUpdateCadastro}>Salvar</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
export default CreateCadastroComponent