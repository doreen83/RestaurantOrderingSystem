import { K17Page } from './app.po';

describe('k17 App', function() {
  let page: K17Page;

  beforeEach(() => {
    page = new K17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
