import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let atendimento = this.store.createRecord('atendimento');
    //atendimento.setDescriptions();
    this.set('atendimento', atendimento);
    return atendimento;
  },

  actions: {
    adicionarAtendimento(atendimento) {
      atendimento.save();
      // this.store.findRecord('consultorio', atendimento.get('selected.id')).then((consultorio)=> {
      //   atendimento.set('consultorio_preferencia', consultorio);
      //   atendimento.set('criado_em' , new Date());
      //   atendimento.save();
      //   consultorio.get('atendimentos').addObject(atendimento);
      //   consultorio.save();
      // })

      this.transitionTo('atendimentos.show', atendimento);
    }
  }
});
