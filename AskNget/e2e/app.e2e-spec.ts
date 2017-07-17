import { AskNgetPage } from './app.po';

describe('ask-nget App', () => {
  let page: AskNgetPage;

  beforeEach(() => {
    page = new AskNgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
