import './App.css';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import RefrigerantesList from './RefrigerantesList';
import RefrigerantesForm from './RefrigerantesForm';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from 'react';
import RefrigerantesSrv from './services/RefrigerantesSrv.js';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';

function App() {
  const toastRef = useRef();
  const [Refrigerantes, setRefrigerantes] = useState([]);
  useEffect(() => {
    onClickAtualizar(); //ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizar = async () => {
    RefrigerantesSrv.listar().then(resp => {
      setRefrigerantes(resp.data);
      console.log(resp.data);
    }).catch(err => {
      console.log("erro:" + err.message);
    });
  };

  const initialState = { id: null, marca: '', quantidade: '', precoLata: '' }
  const [refri, setRefri] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setRefri(initialState);
    setEditando(true);
  }

  const salvar = () => {
    if (refri._id == null) {
      RefrigerantesSrv.incluir(refri).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'sucesso', summary: 'Salvou', life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else {
      RefrigerantesSrv.alterar(refri).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'sucesso', summary: 'Salvou', life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }
  }

  const cancelar = () => {
    console.log('Cancelou..');
    setEditando(false);
  }

  const editar = (id) => {
    setRefri(refrigerantes.filter((refri) => refri._id === id)[0]);
    setEditando(true);
  }

  const excluir = (_id) => {
    confirmDialog({
      message: 'Excluir registro?',
      header: 'Confirmação',
      icon: 'pi pi-spin pi-spinner',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptClassName: 'p-button-danger',
      accept: () => excluirConfirm(_id)
    });
  }

  const excluirConfirm = (_id) => {
    RefrigerantesSrv.excluir(_id).then(response => {
      onClickAtualizar();
      toastRef.current.show({
        severity: 'sucesso',
        summary: 'Excluído',
        life: 2000
      });
    })
      .catch(e => {
        toastRef.current.show({
          severity: 'error',
          summary: e.message,
          life: 4000
        });
      });
  }



  if (!editando) {
    return (
      <div className="App">
        <ConfirmDialog />
        <Toast ref={toastRef} />
        <RefrigerantesList refrigerantes={refrigerantes} onClickAtualizar={onClickAtualizar}
          inserir={inserir} editar={editar} excluir={excluir} />
      </div>
    )
  } else {
    <Toast ref={toastRef} />
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <RefrigerantesForm refri={refri} setRefri={setRefri} salvar={salvar} cancelar={cancelar} />
      </div>
    )
  }
}

export default App;