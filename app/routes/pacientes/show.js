import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let pacientes = this.modelFor('pacientes');
    return pacientes.findBy('id', params.id);
  }

});
