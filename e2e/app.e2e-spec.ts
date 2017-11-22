import { GithubFetchPage } from './app.po';

describe('github-fetch App', () => {
  let page: GithubFetchPage;

  beforeEach(() => {
    page = new GithubFetchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
