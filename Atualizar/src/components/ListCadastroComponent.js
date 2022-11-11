import React, { Component } from 'react'
import CadastroService from '../services/CadastroService'
class ListCadastroComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cadastros: []
        }
        this.addCadastro = this.addCadastro.bind(this);
        this.editCadastro = this.editCadastro.bind(this);
        this.deleteCadastro = this.deleteCadastro.bind(this);
    }
    deleteCadastro(cod_pessoa) {
        CadastroService.deleteCadastro(cod_pessoa).then(res => {
            this.setState({ cadastros: this.state.cadastros.filter(cadastro => cadastro.cod_pessoa !== cod_pessoa) });
        });
    }
    viewCadastro(cod_pessoa) {
        this.props.history.push(`/view-cadastro/${cod_pessoa}`);
    }
    editCadastro(cod_pessoa) {
        this.props.history.push(`/add-cadastro/${cod_pessoa}`);
    }
    componentDidMount() {
        CadastroService.getCadastros().then((res) => {
            this.setState({ cadastros: res.data });
        });
    }
    addCadastro() {
        this.props.history.push('/add-cadastro/_add');
    }
    render() {
        return (
            <div>
                
                <div className="row">
                    <button className="btn btn-dark"style={{ color: '#ef9539' }} onClick={this.addCadastro}> Lista  Cadastro</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> Data de Nascimento</th>
                                <th> Cidade</th>
                                <th> CPF</th>
                                <th> Endereço</th>
                                <th> Bairro</th>
                                <th> CEP</th>
                                <th> Celular</th>
                                <th> Email</th>
                                <th> Senha</th>
                                <th> Voluntario</th>
                                <th> Participante</th>
                                <th> Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cadastros.map(
                                    cadastro =>
                                        <tr key={cadastro.cod_pessoa}>
                                            <td> {cadastro.nome}</td>
                                            <td> {cadastro.dataNascimento}</td>
                                            <td> {cadastro.cidade}</td>
                                            <td> {cadastro.cpf}</td>
                                            <td> {cadastro.endereço}</td>
                                            <td> {cadastro.bairro}</td>
                                            <td> {cadastro.cep}</td>
                                            <td> {cadastro.celular}</td>
                                            <td> {cadastro.email}</td>
                                            <td> {cadastro.senha}</td>
                                            <td> {cadastro.escolha_voluntario}</td>
                                            <td> {cadastro.escolha_participante}</td>

                                            <td>
                                                <button onClick={() => this.editCadastro(cadastro.cod_pessoa)}
                                                    className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deleteCadastro(cadastro.cod_pessoa)} className="btn btn-danger">Apagar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.viewCadastro(cadastro.cod_pessoa)} className="btn btn-info">Visualizar </button>
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListCadastroComponent