// React 
import React from 'react';

// Imagens
import Bolhas_inferior from './assets/imagens/tela-sign-in/bolhas-inferior.svg';
import Bolhas_superior from './assets/imagens/tela-sign-in/bolhas-superior.svg';
import Logo from './assets/imagens/logo/pisocial.svg';
import Facebook from './assets/imagens/midias-sociais/facebook.svg';
import LinkedIn from './assets/imagens/midias-sociais/linkedin.svg';
import Twitter from './assets/imagens/midias-sociais/twitter.svg';

// Css
import './index.css';

function App() {

  return (
    <div className=" container container_sign_in">
    
    {/* Fundo Sign-In */}
      
      <div className="fundo_sign_in">

        <div className="logo_sign_in">
          <img src={Logo} />
        </div>
        
        <div className="box_midias_sign_in">

          <button className="button_box_midias_sign_in">
            <img className="img_midia_social_sign_in" src={LinkedIn} />
            <span className="texto_midia_social_sign_in">Sign up with LinkedIn</span>
          </button>

          <button className="button_box_midias_sign_in">
            <img className="img_midia_social_sign_in" src={Facebook} />
            <span className="texto_midia_social_sign_in">Sign up with Facebook</span>
          </button>

          <button className="button_box_midias_sign_in">
            <img className="img_midia_social_sign_in" src={Twitter} />
            <span className="texto_midia_social_sign_in">Sign up with Twitter</span>
          </button>
        </div>

      </div>

    {/* Formulário Sign-In */}
    <div className="form_sign_in">

      <h1 className="form_sign_in_titulo">Sign In</h1>
      <span className="form_sign_subtitulo">Get started absolutely free</span>
      
      <form className="formulario_form_sign_in">
        <label className="form_sign_in_label">Email</label>
        <input className="form_sign_in_input" />

        <label className="form_sign_in_label">Password</label>
        <input className="form_sign_in_input" />

        <input name="Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings" className="checkbox_form_sign_in" type="checkbox"/>

        <button className="button_form_sign_in">Sign In</button>
      </form>
    </div>

    </div>
  );
}

export default App;
