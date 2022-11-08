package com.example.demo.ControllerCadastro;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.CadastroRepository;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Model.Cadastro;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")


public class CadastroController {
	 @Autowired
	    private CadastroRepository cadastroRepository;
	    
	    // nesta classe serão criadas:
	    
	    // Pegar todos os Cadastro;
	    
	    
	    @GetMapping("/cadastros")
	    public List<Cadastro> getAllcadastros(){
	        
	        return cadastroRepository.findAll();
	        
	        
	    }
	    
	    // Pegar um Cadastro usando seu ID;
	    @GetMapping("/cadastros/{cod_pessoa}")
	    public ResponseEntity<Cadastro> getCadastroById(@PathVariable Long cod_pessoa){
	        Cadastro cadastro = cadastroRepository.findById(cod_pessoa).orElseThrow(()-> new ResourceNotFoundException("Cadastro não existe com id:"+ cod_pessoa));
	        return ResponseEntity.ok(cadastro);
	    }
	    
	    // Criar um novo Cadastro// Não entendi muito bem esse conceito
	    
	    @PostMapping("/cadastros")
	    public Cadastro createCadastro(@RequestBody Cadastro cadastro) {
	        return cadastroRepository.save(cadastro);
	        
	    }
	      
	    // Alterar um Cadastro;
	    
	    @PutMapping("/cadastros/{cod_pessoa}")
	    public ResponseEntity<Cadastro> updateCadastro (@PathVariable Long cod_pessoa, @RequestBody Cadastro cadastroDetails){
	        Cadastro cadastro = cadastroRepository.findById(cod_pessoa).orElseThrow(()-> new ResourceNotFoundException("Cadastro não existe com id:"+ cod_pessoa));
	          
	        cadastro.setNome(cadastroDetails.getNome());
	        cadastro.setDataNascimento(cadastroDetails.getDataNascimento());
	        cadastro.setCidade(cadastroDetails.getCidade());
	        cadastro.setCpf(cadastroDetails.getCpf());
	        cadastro.setEndereço(cadastroDetails.getEndereço());
	        cadastro.setBairro(cadastroDetails.getBairro());
	        cadastro.setEstado(cadastroDetails.getEstado());
	        cadastro.setCep(cadastroDetails.getCep());
	        cadastro.setCelular(cadastroDetails.getCelular());
	        cadastro.setEmail(cadastroDetails.getEmail());
	        cadastro.setSenha(cadastroDetails.getSenha());
	        cadastro.setEscolha_voluntario(cadastroDetails.getEscolha_voluntario());
	        cadastro.setEscolha_participante(cadastroDetails.getEscolha_participante());
	        
	       
	        Cadastro updateCadastro = cadastroRepository.save(cadastro);
	        return ResponseEntity.ok(updateCadastro);
	        
	    }
	        
	    // Deletar um Cadastro.
	        
	    @DeleteMapping("/cadastros/{cod_pessoa}")
	    public ResponseEntity<Map<String, Boolean>> deleteCadastro(@PathVariable Long cod_pessoa){
	        Cadastro cadastro = cadastroRepository.findById(cod_pessoa).orElseThrow(()-> new ResourceNotFoundException("Cadastro não existe com id:"+ cod_pessoa));
	        cadastroRepository.delete(cadastro);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deletado", Boolean.TRUE);
	        return ResponseEntity.ok(response);
	        
	    }    


}







    
   


  