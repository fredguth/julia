import Model from 'ember-data/model';
import EmberValidations from 'ember-validations';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';
import moment from 'moment';

const store = Ember.inject.service('store');
const { computed } = Ember;

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
    {key:'paciente', label:'Paciente:', placeholder:'Escolha Paciente', type:'select', selectedName:'selectedPaciente'},
    // horario
    {key:'consultorio', label:'Consultório:', placeholder:'Escolha Consultório', type:'select', selectedName:'selectedConsultorio'},

    {key:'valor', label:'Valor:', placeholder:'Preço Consulta', value:'model.valor', type:'text'},
    {key:'formaPagamento', label:'Forma de Pagamento:', placeholder:'Escolha Paciente', type:'select',
       selected: 'Dinheiro', options:[{name:'Dinheiro'}, {name:'Cheque'}, {name:'Depósito'}], selectedName: 'selectedPagamento'},
    {key:'atraso', label:'Atraso:', selected:0, type:'select', options:[{name:0},{name:15},{name:30}]},
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

  name: computed('paciente', 'consultorio', 'horario', function() {
    let dia = moment(this.get('horario')).format('DD-MM-YY');
    let hora = moment(this.get('horario')).format('ha');
    let paciente = this.get('paciente.nome');
    let consultorio = this.get('consultorio.sigla');
    return `${paciente} - ${consultorio} @ ${dia}, ${hora}`;
  }),

  setDescriptions() {
      this.set('selected', null);
      this.store.findAll('consultorio').then((consultorios)=>{
        let entry = this.get('descriptions').findBy('key', 'consultorio');
        entry['options'] = consultorios.toArray();
      });
  }


});
