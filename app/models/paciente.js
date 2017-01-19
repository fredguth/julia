import Model from 'ember-data/model';
import EmberValidations from 'ember-validations';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

const store = Ember.inject.service('store');
const { computed: {alias} } = Ember;

export default Model.extend(EmberValidations, {
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

  descriptions: [
    {key:'cpf', label:'CPF:', placeholder:'Insira CPF', value:'model.cpf', type:'text'},
    {key:'cep', label:'CEP:', placeholder:'Insira CEP', value:'model.cep', type:'text'},
    {key:'nome', label:'Nome:', placeholder:'Insira nome', value:'model.nome', type:'text'},
    {key:'telefone', label:'Telefone:', placeholder:'Insira telefone', value:'model.telefone', type:'text'},
    {key:'email', label:'Email:', placeholder:'Insira email', value:'model.email', type:'text'},
    {key:'logradouro', label:'Logradouro:', placeholder:'Insira logradouro', value:'model.logradouro', type:'text'},
    {key:'numero', label:'Número:', placeholder:'Insira número no logradouro', value:'model.numero', type:'text'},
    {key:'complemento', label:'Complemento:', placeholder:'Insira complemento', value:'model.complemento', type:'text'},
    {key:'bairro', label:'Bairro:', placeholder:'Insira bairro', value:'model.bairro', type:'text'},
    {key:'cidade', label:'Cidade:', placeholder:'Insira cidade', value:'model.cidade', type:'text'},
    {key:'uf', label:'UF:', placeholder:'Insira uf', value:'model.uf', type:'text'},
    {key:'consultorio_preferencia', label:'Consultório de Preferência:', placeholder:'Escolha Consultório', type:'select', selectedName: 'selectedConsultorio'},
    {key:'quem_indicou', label:'Indicado Por:', placeholder:'Insira quem indicou', value:'model.quem_indicou', type:'text'},
  ],

  name: alias ('nome'),

  validations: {
    'nome': {
      presence:  { message: "Presença obrigatória." },
      length: { minimum: 6 , messages:{tooShort: "Mínimo de 6 caracteres."}}
    },
    'telefone': {
      format: { with: /^[0-9+()-.\s]*$/, message: 'Aceita apenas telefones válidos' },
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
        with:/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/,
        message: "Aceita apenas CPFs válidos."
      }
    },
    'cep': {
      format: {
        allowBlank: true,
        with:/^[0-9]{2}[\.]?[0-9]{3}[\-]?[0-9]{3}$/,
        message: "Aceita apenas CEPs válidos."
      }
    },
    'uf': {
      format: {
        allowBlank: true,
        with:/^[-a-z]{2}$/,
        message: "Apenas 2 caracteres."
      }
    },
  },

  setDescriptions() {
      this.set('selected', null);
      this.store.findAll('consultorio').then((consultorios)=>{
        let entry = this.get('descriptions').findBy('key', 'consultorio_preferencia');
        entry['options'] = consultorios.toArray();
      });
  }


});
