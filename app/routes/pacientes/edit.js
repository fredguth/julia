import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let pacientes = this.modelFor('pacientes');
    let paciente = pacientes.findBy('id', params.id);
    paciente.setDescriptions();
    paciente.set('selected', paciente.get('consultorio_preferencia'))
    this.set('paciente', paciente);
    return paciente;
  },

  actions: {
    editarPaciente(paciente) {
      this.store.findRecord('consultorio', paciente.get('selected.id')).then((consultorio)=> {
        paciente.set('consultorio_preferencia', consultorio);
        paciente.save();
        consultorio.get('pacientes').addObject(paciente);
        consultorio.save();
      })
      this.transitionTo('pacientes.show', paciente);
    }
  }
});