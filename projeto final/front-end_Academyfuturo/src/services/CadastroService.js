import axios from 'axios';
const Cadastro_API_BASE_URL = "http://localhost:8080/api/v1/cadastros";

class  CadastroService {

getCadastros(){
return axios.get( Cadastro_API_BASE_URL);
}
createCadastro( cadastro){
return axios.post( Cadastro_API_BASE_URL, cadastro);
}
getCadastroById(cadastrocod_pessoa){
return axios.get( Cadastro_API_BASE_URL + '/' + cadastrocod_pessoa);
}
updateCadastro(cadastro, cadastrocod_pessoa){
return axios.put( Cadastro_API_BASE_URL + '/' + cadastrocod_pessoa, cadastro);
}
deleteCadastro(cadastrocod_pessoa){
return axios.delete( Cadastro_API_BASE_URL + '/' + cadastrocod_pessoa);
}
}
export default new  CadastroService()





