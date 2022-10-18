package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="oficinas")
public class Oficinas {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String  codoficinas;
	
	@Column(name="musica")
	private String musica;
	
	@Column(name="capoeira")
	private String capoeira;
	
	@Column(name="Art_cenicas")
	private String Art_cenicas ;
	
	@Column(name="Artesanato")
	private String Artesanato;
	
	@Column(name="mec_eletrica ")
	private String  mec_eletrica ;
	
	@Column(name="adolesc_aprendiz")
	private String adolesc_aprendiz;
	
	@Column(name="ofi_aprendizagem")
	private String ofi_aprendizagem;
	
	@Column(name="bibliotecae")
	private String biblioteca;
	
	@Column(name="inclu_digital")
	private String inclu_digital;
	

	public Oficinas () {
		super();
	}
	
	//Get and Set
	public String getCodoficinas() {
		return codoficinas;
	}
	public void setCodoficinas(String codoficinas) {
		this.codoficinas = codoficinas;
	}
	public String getMusica() {
		return musica;
	}
	public void setMusica(String musica) {
		this.musica = musica;
	}
	public String getCapoeira() {
		return capoeira;
	}
	public void setCapoeira(String capoeira) {
		this.capoeira = capoeira;
	}
	public String getArt_cenicas() {
		return Art_cenicas;
	}
	public void setArt_cenicas(String art_cenicas) {
		Art_cenicas = art_cenicas;
	}
	public String getArtesanato() {
		return Artesanato;
	}
	public void setArtesanato(String artesanato) {
		Artesanato = artesanato;
	}
	public String getMec_eletrica() {
		return mec_eletrica;
	}
	public void setMec_eletrica(String mec_eletrica) {
		this.mec_eletrica = mec_eletrica;
	}
	public String getAdolesc_aprendiz() {
		return adolesc_aprendiz;
	}
	public void setAdolesc_aprendiz(String adolesc_aprendiz) {
		this.adolesc_aprendiz = adolesc_aprendiz;
	}
	public String getOfi_aprendizagem() {
		return ofi_aprendizagem;
	}
	public void setOfi_aprendizagem(String ofi_aprendizagem) {
		this.ofi_aprendizagem = ofi_aprendizagem;
	}
	public String getBiblioteca() {
		return biblioteca;
	}
	public void setBiblioteca(String biblioteca) {
		this.biblioteca = biblioteca;
	}
	public String getInclu_digital() {
		return inclu_digital;
	}
	public void setInclu_digital(String inclu_digital) {
		this.inclu_digital = inclu_digital;
	}
	
	

}
