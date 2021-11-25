import { AppBasePage } from '../../app.base.po';

export class AppHeroesDetailsPage extends AppBasePage {
  
  constructor() {
    super();
  }

  navegarParaDetails(){
    this.navegarViaUlr('/hero-details/1009351');
  }

  iniciarNavegacao(){
    this.navegarParaDetails();
  }

  obterTituloDetails(){
    return this.obterElementoXpath('/html/body/app-root/app-heros-details/div/h3').getText();
  }

  obterNomeHero(){
    return this.obterElementoXpath('/html/body/app-root/app-heros-details/div/div[1]/div/h5').getText();
  }

}