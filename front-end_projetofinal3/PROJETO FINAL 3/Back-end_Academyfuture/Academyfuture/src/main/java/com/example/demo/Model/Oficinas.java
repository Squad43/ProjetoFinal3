package com.example.demo.Model;

import java.util.Objects;

import javax.persistence.Column;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



public class Oficinas {
	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private String  codoficinas;
	@Column(name="musica", length=15)
	private String musica;
	@Column(name="capoeira", length=15)
	private String capoeira;
	@Column(name="Art_cenicas", length=15)
	private String Art_cenicas ;
	@Column(name="Artesanato", length=15)
	private String   Artesanato;
	@Column(name="mec_eletrica", length=15)
	private String  mec_eletrica;
	@Column(name="adolesc_aprendiz", length=15)
	private String adolesc_aprendiz;
	@Column(name="ofi_aprendizagem", length=15)
	private String ofi_aprendizagem;
	@Column(name="biblioteca", length=15)
	private String biblioteca;
	@Column(name="inclu_digital", length=15)
	private String inclu_digital;
	
	public Oficinas() {
		super();
	}
	public Oficinas(String codoficinas, String musica, String capoeira, String art_cenicas, String artesanato,
			String mec_eletrica, String adolesc_aprendiz, String ofi_aprendizagem, String biblioteca,
			String inclu_digital) {
		super();
		this.codoficinas = codoficinas;
		this.musica = musica;
		this.capoeira = capoeira;
		Art_cenicas = art_cenicas;
		Artesanato = artesanato;
		this.mec_eletrica = mec_eletrica;
		this.adolesc_aprendiz = adolesc_aprendiz;
		this.ofi_aprendizagem = ofi_aprendizagem;
		this.biblioteca = biblioteca;
		this.inclu_digital = inclu_digital;
		
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
	@Override
	public int hashCode() {
		return Objects.hash(codoficinas);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Oficinas other = (Oficinas) obj;
		return Objects.equals(codoficinas, other.codoficinas);
	}
	
	

}
