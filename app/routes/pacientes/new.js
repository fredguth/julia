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
    onChange(value, model, key) {
      if (key==='cep') {
        if (value.length > 7) {
          $.ajax({
            url: `https://viacep.com.br/ws/${value}/json`,
            type: 'GET',
            success: (response) => {
              console.log('sucess:', response);
              this.set('paciente.cep', response.cep);
              this.set('paciente.logradouro', response.logradouro);
              this.set('paciente.complemento', response.complemento);
              this.set('paciente.bairro', response.bairro);
              this.set('paciente.cidade', response.localidade);
              this.set('paciente.uf', response.uf);
            },
            error: (response) => {
              console.log('error:', response);
            }
          });
        }
      }
    },
    adicionarPaciente(paciente) {
      debugger;
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
