import React,{Component} from "react";
     


class FooterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }

    }
 render(){
       return(
                <footer style={{background:'black'}} width= "50%" > 
            <div className="FaleConosco">
                <h1>FALE CONOSCO</h1>
                <hr  style={{color: ' #ebebeb'}}/>
                <h5>FORMAS DE CONTATO</h5>
                <p>conecte-se com a gente pelas redes sociais</p>
            </div>

            <div className="divGaleria">
                <div  className="Social">
                  <ul className="List">
                    <li className="btn flex"><a className="nav-link" href="web.whatsapp.com/"><img src={require('../assets/imagens/Whatsapp.png')} width="50px" alt="Whatsapp"/></a></li>
                    <li className="btn flex"><a className="nav-link" href="www.facebook.com/"><img src={require('../assets/imagens/facebook_icon.png')}width="50px"  alt="Facebook"/></a></li>
                    <li className="btn flex"><a className="nav-link" href="www.instagram.com/"><img src={require('../assets/imagens/Instagram_icon.png')}width="50px"  alt="Instagram"/></a></li>
                    <li className="btn flex"><a className="nav-link" href="www.google.com/intl/pt-BR/account/about/"><img src={require('../assets/imagens/gmail.png')}  width="50px"  alt="Gmail"/></a></li>
                 </ul>
                 </div>
            </div>  

                    <div className="Rodape">
                        <p><ins>Fale conosco</ins> <br></br> academyfuturo@gmail.com <br></br>Tel: (31) 3355-1111</p> <br></br>
                        <p>NOSSO ENDEREÇO: <br></br> Rua das Flores, nº 35 - Belo Horizonte - MG</p>
                         <br></br>
                         <hr  style={{color: ' #ebebeb'}}/>
                        <p>Academy Futuro &copy; 2022 - CNPJ. 39.888.555/0001-21 - Brasil - Criado por <strong>Squad-43</strong></p>
                        <span>RecodePro 2022</span>
                    </div> 
            </footer>
      
       )
    }

}
export default FooterComponent