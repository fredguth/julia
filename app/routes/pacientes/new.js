import Ember from 'ember';

const { String: {w}, String: {capitalize} }=Ember;
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
        let nome = w(paciente.get('nome')).map(function(item) {
          return capitalize(item);
        }).join (' ');
        paciente.set('nome', nome);
        paciente.set('criado_em' , new Date());
        paciente.save();
        consultorio.get('pacientes').addObject(paciente);
        consultorio.save();
      })

      this.transitionTo('pacientes.show', paciente);
    }
  }
});
