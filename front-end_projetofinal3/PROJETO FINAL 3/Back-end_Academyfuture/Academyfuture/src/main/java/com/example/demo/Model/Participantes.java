package com.example.demo.Model;

import java.util.Objects;

import javax.persistence.Column;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



public class Participantes {
	@Override
	public int hashCode() {
		return Objects.hash(codmatricula);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Participantes other = (Participantes) obj;
		return Objects.equals(codmatricula, other.codmatricula);
	}
	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private String codmatricula;
	@Column(name="escoprojeto", length=15)
	private String escoprojeto;
	@Column(name="quant", length=15)
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
