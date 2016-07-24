import Model from 'ember-data/model';
import EmberValidations from 'ember-validations';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

const store = Ember.inject.service('store');

export default Model.extend(EmberValidations, {
  rev: attr('string'),

  horario:        attr('date'),
  valor:          attr('number'),
  formaPagamento: attr('string'),
  atraso:         attr('number'), // em minutos
  obs:            attr('string'),

  paciente: belongsTo('paciente'),
  consultorio: belongsTo('consultorio'),
  // nota fiscal
  descriptions: [
    {key:'paciente', label:'Paciente:', placeholder:'Escolha Paciente', type:'select'},
    // horario
    //{key:'consultorio', label:'Consultório:', placeholder:'Escolha Consultório', type:'select'},
    {key:'valor', label:'Valor:', placeholder:'Preço Consulta', value:'model.valor', type:'number'},
    {key:'formaPagamento', label:'Forma de Pagamento:', placeholder:'Escolha Paciente', type:'select', selected: 'Dinheiro', options:['Dinheiro', 'Cheque', 'Depósito']},
    {key:'atraso', label:'Atraso:', selected:0, type:'select', options:[0,15,30]},
    {key:'obs', label:'Obs.:', placeholder:'Observações...', value:'model.obs', type:'textarea'},
  ],

  validations: {
    'paciente': {
      presence:  { message: "Presença obrigatória." },
    },
    'valor': {
      presence: { message: "Presença obrigatória." },
    },
  },

  setDescriptions() {
      this.set('selected', null);
      this.store.findAll('consultorio').then((consultorios)=>{
        let entry = this.get('descriptions').findBy('key', 'consultorio');
        entry['options'] = consultorios.toArray();
      });
  }


});
