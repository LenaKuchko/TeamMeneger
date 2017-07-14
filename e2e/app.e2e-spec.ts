import { MarvelTeamPage } from './app.po';

describe('marvel-team App', () => {
  let page: MarvelTeamPage;

  beforeEach(() => {
    page = new MarvelTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
