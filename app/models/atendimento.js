import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';
import moment from 'moment';
import { validator, buildValidations } from 'ember-cp-validations';

//todo remove
const store = Ember.inject.service();
const { computed } = Ember;

const Validations = buildValidations({
  paciente: validator('presence', true),
  valor: validator('presence', true)
});

export default Model.extend(Validations,  {
  rev: attr('string'),

  horario:        attr('date'),
  valor:          attr('number'),
  formaPagamento: attr('string'),
  obs:            attr('string'),

  paciente: belongsTo('paciente'),
  consultorio: belongsTo('consultorio'),

  name: computed('paciente', 'consultorio', 'horario', function() {
    let dia = moment(this.get('horario')).format('DD-MM-YY');
    let hora = moment(this.get('horario')).format('ha');
    let paciente = this.get('paciente.nome');
    let consultorio = this.get('consultorio.sigla');
    return `${paciente} - ${consultorio} @ ${dia}, ${hora}`;
  })


});
