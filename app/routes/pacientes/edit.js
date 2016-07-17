import Ember from 'ember';

export default Ember.Route.extend({
  paciente: null,

  model(params) {
    let pacientes = this.modelFor('pacientes');
    this.set('paciente', pacientes.findBy('id', params.id));
    return this.get('paciente');
  },
  actions: {
    editarPaciente(edicao) {
      let paciente = this.get('paciente');
      paciente.setProperties(edicao.getProperties('nome', 'telefone', 'email', 'cpf', 'cep', 'endereco', 'quem_indicou'));
      paciente.save();
      this.transitionTo('pacientes.show', paciente);
    }
  }
});
