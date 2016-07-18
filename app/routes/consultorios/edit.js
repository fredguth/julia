import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let consultorios = this.modelFor('consultorios');
    return this.set('consultorio', consultorios.findBy('id', params.id));
  },
  actions: {
    editarConsultorio(consultorio) {
      consultorio.save();
      this.transitionTo('consultorios.show', consultorio);
    }
  }
});
