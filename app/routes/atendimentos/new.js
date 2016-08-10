import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      atendimento: this.store.createRecord('atendimento'),
      pacientes: this.store.findAll('paciente'),
      consultorios: this.store.findAll('consultorio')
    });
  },

  actions: {
    adicionarAtendimento(atendimento) {
      // atendimento.save();
      Ember.Logger.debug('Atendimento:',atendimento);
      this.transitionTo('atendimentos.show', atendimento);
    }
  }
});
