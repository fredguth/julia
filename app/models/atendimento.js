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
  })


});
