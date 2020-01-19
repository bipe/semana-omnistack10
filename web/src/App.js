import React, { useEffect, useState } from 'react';
import api from './services/api';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(()=>{ //useEffect para atualizar os devs na plataforma dps de cadastrar ([] vazio p/ executar so uma vez)
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]); //adição dentro de um array: pega TODOS OS DEVS ATUAIS (...) e adiciona o que esta contido em response.data
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
