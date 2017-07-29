import { RecipePage } from './app.po';

describe('recipe App', () => {
  let page: RecipePage;

  beforeEach(() => {
    page = new RecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
