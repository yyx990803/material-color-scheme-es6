import Base from './base'

class Example extends Base {

  constructor() {
    var example = 123
    this.test = example
  }

  get someProperty() {
    return 'hello'
  }
}
