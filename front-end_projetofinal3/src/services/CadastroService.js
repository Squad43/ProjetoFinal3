import axios from 'axios';
const Cadastro_API_BASE_URL = "http://localhost:8080/api/v1/cadastros";
class  CadastroService {
get Cadastros(){
return axios.get( Cadastro_API_BASE_URL);
}
create Cadastro( cadastro){
return axios.post( Cadastro_API_BASE_URL, cadastro);
}
getCadastroById(cadastroId){
return axios.get( Cadastro_API_BASE_URL + '/' + cadastroId);
}
update Cadastro(cadastro, cadastroId){
return axios.put( Cadastro_API_BASE_URL + '/' + cadastroId, cadastro);
}
delete Cadastro(cadastroId){
return axios.delete( Cadastro_API_BASE_URL + '/' + cadastroId);
}
}
export default new  CadastroService()