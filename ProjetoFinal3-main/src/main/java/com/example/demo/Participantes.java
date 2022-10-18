package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="participantes")
public class Participantes {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String codmatricula;
	
	@Column(name="escoprojeto")
	private String escoprojeto;
	
	@Column(name="quant")
	private String quant;
	
	
	
	public String getCodmatricula() {
		return codmatricula;
	}
	public void setCodmatricula(String codmatricula) {
		this.codmatricula = codmatricula;
	}
	public String getEscoprojeto() {
		return escoprojeto;
	}
	public void setEscoprojeto(String escoprojeto) {
		this.escoprojeto = escoprojeto;
	}
	public String getQuant() {
		return quant;
	}
	public void setQuant(String quant) {
		this.quant = quant;
	}
	
	
	

}
