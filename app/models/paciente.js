import Model from 'ember-data/model';
import EmberValidations from 'ember-validations';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default Model.extend(EmberValidations, {
  rev: attr('string'),

  nome:         attr('string'),
  telefone:     attr('string'),
  email:        attr('string'),
  cpf:          attr('string'),
  cep:          attr('string'),
  endereco:     attr('string'),
  quem_indicou: attr('string'),
  criado_em:    attr('date'),

  validations: {
    'nome': {
      presence:  { message: "Presença obrigatória." },
      length: { minimum: 6 , messages:{tooShort: "Mínimo de 6 caracteres."}}
    },
    'telefone': {
      presence: { message: "Presença obrigatória." },

    },
    'email': {
      format: {
        allowBlank: true,
        with:/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
        message: "Aceita apenas emails válidos."
      }
    },
    'cpf': {
      format: {
        allowBlank: true,
        with:/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        message: "Aceita apenas CPFs válidos."
      }
    },
    'cep': {
      format: {
        allowBlank: true,
        with:/^\\d{5}[-]\\d{3}$/,
        message: "Aceita apenas CEPs válidos."
      }
    },
  }


});
