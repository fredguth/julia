import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let pacientes = this.modelFor('pacientes');
    this.set('paciente', pacientes.findBy('id', params.id));
    return this.get('paciente');
  },
  actions: {
    editarPaciente(paciente) {
      paciente.save();
      this.transitionTo('pacientes.show', paciente);
    }
  }
});
