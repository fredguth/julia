import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.set('consultorio', this.store.createRecord('consultorio'));
  },
  actions: {
    adicionarConsultorio(consultorio) {
      consultorio.set('criado_em' , new Date());
      consultorio.save();
      this.transitionTo('consultorios.show', consultorio);
    }
  }
});
