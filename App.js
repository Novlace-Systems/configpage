import React, { useState } from 'react';
import { User, MessageCircle, MessageCircleHeart, Home } from 'lucide-react';
import './App.css';

const EditProfile = () => {
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(false); // Campo de senha inicialmente habilitado
  const [showWarning, setShowWarning] = useState(false); // Controle da exibição da mensagem

  const handlePasswordClick = () => {
    // Mostra uma caixa de diálogo quando o usuário clica no campo de senha
    if (!isPasswordDisabled) { // Apenas se o campo ainda estiver habilitado
      const confirmChange = window.confirm("Deseja alterar a senha?");
      if (confirmChange) {
        setIsPasswordDisabled(true); // Desabilita o campo de senha
        setShowWarning(true); // Exibe a mensagem de aviso
      }
    }
  };

  return (
    <div className="edit-profile-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src='logoaelin.png' className='logo-aelin' alt="Logo"/>
        </div>
        <div className="menu-items">
          <button className="menu-button">
            <Home className='icon-menu' />
          </button>
          <button className="menu-button">
            <MessageCircleHeart className='icon-menu'/>
          </button>
          <button className="menu-button">
            <MessageCircle className='icon-menu' />
          </button>
          <button className="menu-button-active">
            <User className="user-icon" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Editar Perfil</h1>

        <div className="profile-form">
          <div className="form-group">
            <User className="form-icon" />
            <div className="form-row">
              <div className="form-item">
                <label className="form-label">User name</label>
                <input type="text" className="form-input" defaultValue="Anna Clara" />
              </div>
              <div className="form-item">
                <label className="form-label"> Interação</label>
                <input type="text" className="form-input" defaultValue="Eu gosto de animais, principalmente cachorrinhos." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label className="form-label">Nome</label>
              <input type="text" className="form-input" defaultValue="Anna Clara" />
            </div>
            <div className="form-item">
              <label className="form-label">Sobrenome</label>
              <input type="text" className="form-input" defaultValue="Machado Batista" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" defaultValue="annalamey@gmail.com" />
            </div>
            <div className="form-item">
              <label className="form-label">Senha</label>
              <input 
                type="password" 
                className="form-input" 
                disabled={isPasswordDisabled} 
                defaultValue="flyetbeautlwk2167" 
                onClick={handlePasswordClick} // Aqui é quando o usuário clica no campo de senha e exibe a mensagem
              />
              {showWarning && (
                <p className="warning-text">
                  Verifique seu email para alterar a senha.
                </p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label className="form-label">Telefone</label>
              <input type="tel" className="form-input" defaultValue="11 95759-2828" />
            </div>
            <div className="form-item">
              <label className="form-label">Endereço</label>
              <input type="text" className="form-input" defaultValue="Rua das Begônias" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label className="form-label">Número</label>
              <input type="text" className="form-input" defaultValue="312" />
            </div>
            <div className="form-item">
              <label className="form-label">Bairro</label>
              <input type="text" className="form-input" defaultValue="Jardim América" />
            </div>
            <div className="form-item">
              <label className="form-label">Cidade</label>
              <input type="text" className="form-input" defaultValue="Arujá" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label className="form-label">UF</label>
              <input type="text" className="form-input" defaultValue="SP" />
            </div>
            <div className="form-item">
              <label className="form-label">CEP</label>
              <input type="text" className="form-input" defaultValue="08582-335" />
            </div>
          </div>

          <div className="form-actions">
            <button className="save-button">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
