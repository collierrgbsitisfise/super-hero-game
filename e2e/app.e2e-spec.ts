import { FightAppPage } from './app.po';

describe('fight-app App', () => {
  let page: FightAppPage;

  beforeEach(() => {
    page = new FightAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
