import { VendingPage } from './app.po';

describe('vending App', () => {
  let page: VendingPage;

  beforeEach(() => {
    page = new VendingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
