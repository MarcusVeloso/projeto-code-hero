import { AppBasePage } from '../../app.base.po';
import { by, element } from 'protractor';

export class AppHeroesListarPage extends AppBasePage {
  
  constructor() {
    super();
  }

  getTitleText() {
    return this.obterElementoXpath('/html/body/app-root/app-heros-list/div/h3').getText();
  }

  retornaNomeHeroiPesquisado(){
    return this.obterElementoXpath('/html/body/app-root/app-heros-list/div/div[3]/div/div[1]').getText();
  }
  
  campoParametroPesquisa = element(by.id('parametroPesquisa'));
  botaoPesquisar = element(by.id('lupaPesquisa'));
}