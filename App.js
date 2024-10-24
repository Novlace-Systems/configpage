import React, { useState } from 'react';
import { HouseIcon, MessageCircleHeart, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const [errors, setErrors] = useState({});
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [customAvatar, setCustomAvatar] = useState(null);

  const dragons = [
    { id: 1, color: 'orange', src: './DragaoRoxoa.png' },
    { id: 2, color: 'purple', src: './DragaoLaranjaa.png' },
    { id: 3, color: 'pink', src: './DragaoAzula.png' },
    { id: 4, color: 'pink', src: './DragaoPretoa.png' }
  ];

  // Validação de formulário
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.nome.trim()) {
      tempErrors.nome = 'Nome é obrigatório';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Email inválido';
    }

    if (formData.senha.length < 6) {
      tempErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handler para upload de avatar personalizado
  const handleCustomAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result);
        setSelectedAvatar('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler para salvar
  const handleSave = () => {
    if (validateForm()) {
      console.log('Formulário válido, dados:', { ...formData, avatar: selectedAvatar });
      // Aqui você adicionaria a lógica para salvar os dados
    }
  };

  return (
    <div className="edit-profile-container">
      <motion.div 
        className="sidebar"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/logo.png" alt="Logo" className="logo" />



        <div className="nav-items">
          <button className="menu-button">
            <HouseIcon className="icon-menu" />
          </button>
          <button className="menu-button">
            <MessageCircleHeart className="icon-menu" />
          </button>
          <button className="menu-button-active">
            <User className="user-icon" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className='container-items'>
        <h1 className="title">Editar Perfil</h1>

        <div className="content-wrapper">
          <div className="form-section">
            <div className="form-group">
              <label>Nome de Usuário</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className={`input-field ${errors.nome ? 'error' : ''}`}
              />
              {errors.nome && <span className="error-message">{errors.nome}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`input-field ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                value={formData.senha}
                onChange={(e) => setFormData({...formData, senha: e.target.value})}
                className={`input-field ${errors.senha ? 'error' : ''}`}
              />
              {errors.senha && <span className="error-message">{errors.senha}</span>}
            </div>
          </div>

          <div className="avatar-section">
            <h2>Escolha seu avatar:</h2>
            <div className="avatar-grid">
              {dragons.map((dragon) => (
                <motion.button
                  key={dragon.id}
                  className={`avatar-button ${selectedAvatar === dragon.id ? 'selected' : ''}`}
                  onClick={() => setSelectedAvatar(dragon.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={dragon.src} alt={`Dragon ${dragon.id}`} />
                </motion.button>
              ))}
            </div>

          </div>
        </div>
        

        <motion.button 
          className="save-button"
          onClick={handleSave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Salvar
        </motion.button>
        </div>
      </motion.div>
      
    </div>
    
    
  );
};

export default EditProfile;
