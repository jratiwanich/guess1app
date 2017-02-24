import { Guess1appPage } from './app.po';

describe('guess1app App', () => {
  let page: Guess1appPage;

  beforeEach(() => {
    page = new Guess1appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
