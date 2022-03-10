import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Linus Tovards', 'Mark Zuckerberg', 'Reid Hofmann','Taylor Otwell'];
      }
}
