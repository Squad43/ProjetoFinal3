// Codigo para visualizar os funcionarios
import React, { Component } from 'react'
import CadastroService from '../services/CadastroService'
class ViewCadastroComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cod_pessoa: this.props.match.params.cod_pessoa,
            cadastro: {}
        }
    }
    componentDidMount() {
        CadastroService.getCadastroById(this.state.cod_pessoa).then(res => {
            this.setState({ cadastro: res.data });
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Dados dos Cadastros</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>  Nome do Cadastro: </label>
                            <div> {this.state.cadastro.nome}</div>
                        </div>
                        <div className="row">
                            <label>DataNascimento do Cadastro: </label>
                            <div> {this.state.cadastro.dataNascimento}</div>
                        </div>
                        <div className="row">
                            <label>Cidade do Cadastro: </label>
                            <div> {this.state.cadastro.cidade}</div>
                        </div>
                        <div className="row">
                            <label> Cpf do Cadastro: </label>
                            <div> {this.state.cadastro.cpf}</div>
                        </div>
                        <div className="row">
                            <label> Endereço do Cadastro: </label>
                            <div> {this.state.cadastro.endereço}</div>
                        </div>
                        <div className="row">
                            <label>  Bairro do Cadastro: </label>
                            <div> {this.state.cadastro.bairro}</div>
                        </div>
                        <div className="row">
                            <label>Estado do Cadastro: </label>
                            <div> {this.state.cadastro.estado}</div>
                        </div>
                        <div className="row">
                            <label> Nome do cep: </label>
                            <div> {this.state.cadastro.cep}</div>
                        </div>
                        <div className="row">
                            <label> Celular do Cadastro: </label>
                            <div> {this.state.cadastro.celular}</div>
                        </div>
                        <div className="row">
                            <label> Email do cadastro: </label>
                            <div> {this.state.cadastro.email}</div>
                        </div>

                        <div className="row">
                            <label> Senha do cadastro: </label>
                            <div> {this.state.cadastro.senha}</div>
                        </div>
                        <div className="row">
                            <label> escolha_voluntario do cadastro: </label>
                            <div> {this.state.cadastro.escolha_voluntario}</div>
                        </div>
                        <div className="row">
                            <label> Escolha_participante do cadastro: </label>
                            <div> {this.state.cadastro.escolha_participante}</div>
                        </div>

                    </div>
                </div>
                <br></br>

            </div>
        )
    }
}
export default ViewCadastroComponent