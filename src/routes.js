import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Tela_Home from './pages/Home';
import Tela_Cadastro from './pages/Cadastro';
import Tela_Vagas from './pages/Vagas';
import Tela_Pagamento from './pages/Pagamento';
import Tela_Cadastro_Cartao from './pages/Cadastrar_Cartao';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/" exact component={Tela_Home} />
          <Route path="/cadastro" exact component={Tela_Cadastro} />
          <Route path="/vagas" exact component={Tela_Vagas} />
          <Route path="/pagamento" exact component={Tela_Pagamento} />
          <Route path="/cadastrar_cartao" exact component={Tela_Cadastro_Cartao} />
  
        </Switch>
      </BrowserRouter>
    );
  }