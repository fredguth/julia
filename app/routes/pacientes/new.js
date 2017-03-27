import Ember from 'ember';

const { String: {w}, String: {capitalize}, $ }=Ember;
export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      paciente: this.store.createRecord('paciente'),
      consultorios: this.store.findAll('consultorio')
    });
  },

  actions: {

    adicionarPaciente(paciente) {
      console.log('adicionarPaciente');
      debugger;
      paciente.save().then(()=> {
        this.transitionTo('pacientes.show', paciente);
      });
    }

  }
});
