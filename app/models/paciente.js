import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const store = Ember.inject.service('store');
const { computed: {alias} } = Ember;

const Validations = buildValidations({
  nome: validator('presence', true),
});

export default Model.extend(Validations, {
  rev: attr('string'),

  cpf:          attr('string'),
  cep:          attr('string'),
  nome:         attr('string'),
  telefone:     attr('string'),
  email:        attr('string'),
  logradouro:   attr('string'),
  numero:       attr('string'),
  complemento:  attr('string'),
  bairro:       attr('string'),
  cidade:       attr('string'),
  uf:           attr('string'),
  quem_indicou: attr('string'),
  criado_em:    attr('date'),

  consultorio_preferencia: belongsTo('consultorio'),

  name: alias ('nome'),

  // validations: {
  //   'nome': {
  //     presence:  { message: "Presença obrigatória." },
  //     length: { minimum: 2 , messages:{tooShort: "Mínimo de 2 caracteres."}}
  //   },
  //   'telefone': {
  //     format: { with: /^[0-9+()-.\s]*$/, message: 'Aceita apenas telefones válidos' },
  //     presence: { message: "Presença obrigatória." },

  //   },
  //   'email': {
  //     format: {
  //       allowBlank: true,
  //       with:/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
  //       message: "Aceita apenas emails válidos."
  //     }
  //   },
  //   'cpf': {
  //     format: {
  //       allowBlank: true,
  //       with:/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/,
  //       message: "Aceita apenas CPFs válidos."
  //     }
  //   },
  //   'cep': {
  //     format: {
  //       allowBlank: true,
  //       with:/^[0-9]{2}[\.]?[0-9]{3}[\-]?[0-9]{3}$/,
  //       message: "Aceita apenas CEPs válidos."
  //     }
  //   },
  //   'uf': {
  //     format: {
  //       allowBlank: true,
  //       with:/^[-a-z]{2}$/,
  //       message: "Apenas 2 caracteres."
  //     }
  //   },
  // },

  setDescriptions() {
      this.set('selected', null);
      this.store.findAll('consultorio').then((consultorios)=>{
        let entry = this.get('descriptions').findBy('key', 'consultorio_preferencia');
        entry['options'] = consultorios.toArray();
      });
  }


});
