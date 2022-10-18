package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="cadastro")
public class Cadastro {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long cod_pessoa;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="dataNascimento")
	private String dataNascimento;
	
	@Column(name="cidade")
	private String cidade;
	
	@Column(name="cpf")
	private String cpf;
	
	@Column(name="endereço")
	private String endereço;
	
	@Column(name="bairro")
	private String bairro;
	
	@Column(name="estado")
	private String estado;
	
	@Column(name="cep")
	private String cep;
	
	@Column(name="celular")
	private String celular;
	
	@Column(name="email")
	private String email;
	
	@Column(name="senha")
	private String senha;
	
	@Column(name="escolha_voluntario")
	private String escolha_voluntario;
	
	@Column(name="escolha_participante")
	private String escolha_participante;
	
	
	
	
	
	public Cadastro() {
		super();
	}
	
	
	
	public Cadastro(Long cod_pessoa, String nome, String dataNascimento, String cidade, String cpf, String endereço,
			String bairro, String estado, String cep, String celular, String email, String senha,
			String escolha_voluntario, String escolha_participante) {
		super();
		this.cod_pessoa = cod_pessoa;
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.cidade = cidade;
		this.cpf = cpf;
		this.endereço = endereço;
		this.bairro = bairro;
		this.estado = estado;
		this.cep = cep;
		this.celular = celular;
		this.email = email;
		this.senha = senha;
		this.escolha_voluntario = escolha_voluntario;
		this.escolha_participante = escolha_participante;
	}



	public Long getCod_pessoa() {
		return cod_pessoa;
	}
	public void setCod_pessoa(Long cod_pessoa) {
		this.cod_pessoa = cod_pessoa;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getEndereço() {
		return endereço;
	}
	public void setEndereço(String endereço) {
		this.endereço = endereço;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getEscolha_voluntario() {
		return escolha_voluntario;
	}
	public void setEscolha_voluntario(String escolha_voluntario) {
		this.escolha_voluntario = escolha_voluntario;
	}
	public String getEscolha_participante() {
		return escolha_participante;
	}
	public void setEscolha_participante(String escolha_participante) {
		this.escolha_participante = escolha_participante;
	}

}
