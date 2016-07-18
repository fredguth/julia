import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.set('paciente', this.store.createRecord('paciente'));
    return this.get('paciente');
  },
  actions: {
    adicionarPaciente(paciente) {
      paciente.set('criado_em' , new Date());
      paciente.save();
      this.transitionTo('pacientes.show', paciente);
    }
  }
});
