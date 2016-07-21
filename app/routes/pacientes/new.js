import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    this.set('paciente', this.store.createRecord('paciente'));
    return this.store.findAll('consultorio').then((consultorios)=>{
      let entry = this.get('paciente.descriptions').findBy('key', 'consultorio_preferencia');
      entry['options'] = consultorios.toArray();
      this.set('paciente.selected', null);
      return this.get('paciente');
    });

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
