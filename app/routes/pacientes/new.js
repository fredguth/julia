import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    adicionarPaciente(paciente) {
      Ember.Logger.debug('paciente:', paciente);
      var novoPaciente = this.store.createRecord('paciente');
      let now = new Date();
      novoPaciente.setProperties(paciente);
      novoPaciente.set('criado_em' , now);
      novoPaciente.save();
      this.transitionTo('pacientes.show', novoPaciente);
    }
  }
});
