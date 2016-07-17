import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {};
  },
  actions: {
    adicionarPaciente(paciente) {
      Ember.Logger.debug('paciente:', paciente);
      var novoPaciente = this.store.createRecord('paciente');
      let now = new Date();
      novoPaciente.setProperties(paciente);
      novoPaciente.set('criado_em' , now);
      //novoPaciente.set('id', now.toISOString() );
      novoPaciente.save();
      this.transitionTo('pacientes.show', novoPaciente.get('id'));
    }
  }
});
