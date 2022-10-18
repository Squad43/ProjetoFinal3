package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="voluntarios")
public class Voluntarios {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String codvoluntario;
	
	@Column(name="Datainicio")
	private String Datainicio;
	
	@Column(name="esco_ensino")
	private String esco_ensino;
	
	@Column(name="coddocente")
	private String coddocente;
	
	
	
	//Get and Set
	public String getCodvoluntario() {
		return codvoluntario;
	}
	public void setCodvoluntario(String codvoluntario) {
		this.codvoluntario = codvoluntario;
	}
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
