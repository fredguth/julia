import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let paciente = this.store.createRecord('paciente');
    paciente.setDescriptions();
    this.set('paciente', paciente);
    return paciente;
  },

  actions: {
    adicionarPaciente(paciente) {
      this.store.findRecord('consultorio', paciente.get('selected.id')).then((consultorio)=> {
        paciente.set('consultorio_preferencia', consultorio);
        paciente.set('criado_em' , new Date());
        paciente.save();
        consultorio.get('pacientes').addObject(paciente);
        consultorio.save();
      })

      this.transitionTo('pacientes.show', paciente);
    }
  }
});
