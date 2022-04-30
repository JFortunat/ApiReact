import React, { useState, useEffect, useRef } from 'react';
import  RefrigerantesSrv from '../services/RefrigerantesSrv';

function App() {
  const [Refri, setRefri] = useState([])
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = () => {
    RefriSrv.listar().then(response => {
      setRefrigerantes(response.data);
      console.log("Refrigerantes atualizados");
    }).catch(e => {
      console.log("Erro: " + e.message);
    });
  }
}