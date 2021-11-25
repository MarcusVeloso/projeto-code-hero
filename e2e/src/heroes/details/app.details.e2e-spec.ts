import { AppHeroesDetailsPage } from './app.details.po';
import { browser, logging } from 'protractor';

describe('Testes da página retornar heroes', () => {
  let page: AppHeroesDetailsPage;

  beforeEach(() => {
    page = new AppHeroesDetailsPage();
  });

  it('deve navegar até o formulário details heroes', () => {
    page.iniciarNavegacao();
    expect(page.obterTituloDetails()).toEqual('Detalhes do personagem');
  });

  it('deve navegar até o formulário details heroes e confirmar nome Hulk', () => {
    page.iniciarNavegacao();
    expect(page.obterNomeHero()).toEqual('Hulk');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});