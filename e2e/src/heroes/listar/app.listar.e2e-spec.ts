import { AppHeroesListarPage } from './app.listar.po';
import { browser, logging } from 'protractor';

describe('Testes da página heroes listar todos', () => {
  let page: AppHeroesListarPage;

  beforeEach(() => {
    page = new AppHeroesListarPage();
  });

  it('deve estar na página listar todos', () => {
    page.navegarParaHome();
    expect(page.getTitleText()).toEqual('Busca de personagens');
  });

  it('deve pesquisar o heroi na lista', () => {
    page.navegarParaHome();
    page.campoParametroPesquisa.sendKeys('Iron Man');
    page.botaoPesquisar.click();
    page.esperar(3000);

    expect(page.retornaNomeHeroiPesquisado()).toEqual('Iron Man');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});