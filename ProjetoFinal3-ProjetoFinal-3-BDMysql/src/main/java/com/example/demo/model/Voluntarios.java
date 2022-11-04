package com.example.demo.model;



import javax.persistence.Column;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




public class Voluntarios {
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 private String codvoluntario;
	 public String getCodvoluntario() {
		return codvoluntario;
	}
	public void setCodvoluntario(String codvoluntario) {
		this.codvoluntario = codvoluntario;
	}
	@Column(name="Datainicio", length=15)
	private String Datainicio;
	 @Column(name="esco_ensino", length=15)
	private String esco_ensino;
	 @Column(name="coddocente", length=15)
	private String coddocente;
	
	

	
	public String getDatainicio() {
		return Datainicio;
	}
	public void setDatainicio(String datainicio) {
		Datainicio = datainicio;
	}
	public String getEsco_ensino() {
		return esco_ensino;
	}
	public void setEsco_ensino(String esco_ensino) {
		this.esco_ensino = esco_ensino;
	}
	public String getCoddocente() {
		return coddocente;
	}
	public void setCoddocente(String coddocente) {
		this.coddocente = coddocente;
	}

	
}
	
	


