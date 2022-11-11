import React,{Component} from "react";
import "./footer.css"

class FooterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }

    }
 render(){
       return(
                <footer> 
               
                <h1>FALE CONOSCO</h1>
                <h5>FORMAS DE CONTATO</h5>
                <p>conecte-se com a gente pelas redes sociais</p>

                <div className="ListLink flex">
                  <ul className="Social" id="collapsibleNavbar1">
                    <li><a className="nav-link" href="https://web.whatsapp.com/"><img src={require('../assets/imagens/Whatsapp.png')} width="50px" alt="logo" /></a></li>
                    <li><a className="nav-link" href="https://www.facebook.com/"><img src="assets/imagens/facebook_icon.png"  alt="Whatsapp"/></a></li>
                    <li><a className="nav-link" href="https://www.instagram.com/"><img src="assets/imagens/Instagram_icon.png" alt="Whatsapp"/></a></li>
                    <li><a className="nav-link" href="https://www.google.com/intl/pt-BR/account/about/"><img src="assets/imagens/gmail.png"  alt="Whatsapp"/></a></li>
                 </ul>
                 </div>

                    <div>
                        <p>Fale conosco academyfuturo@gmail.com Tel: (31) 3355-1111</p>
                        <p>NOSSO ENDEREÇO:  Rua das Flores, nº 35 - Belo Horizonte - MG</p>
                        <p>Academy Futuro &copy; 2022 - CNPJ. 39.888.555/0001-21 - Brasil - Criado por <strong>Squad-43</strong></p>
                        <span>RecodePro 2022</span>
                    </div> 
            </footer>
      
       )
    }

}
export default FooterComponent