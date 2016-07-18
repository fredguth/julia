import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let consultorios = this.modelFor('consultorios');
    return consultorios.findBy('id', params.id);
  }

});
