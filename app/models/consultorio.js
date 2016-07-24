import Model from 'ember-data/model';
import EmberValidations from 'ember-validations';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend(EmberValidations, {
  rev: attr('string'),

  nome:           attr('string'),
  sigla:          attr('string'),
  endereco:       attr('string'),
  preco_consulta: attr('number'),
  custo_consulta: attr('number'),
  pacientes:      hasMany('pacientes'),
// ,
//                   {
//                     async: true,
//                     inverse: 'consultorio_preferencia'
//                   })
  descriptions: [
    {key:'nome', label:'Nome:', placeholder:'Insira nome', value:'model.nome', type:'text'},
    {key:'sigla', label:'Sigla:', placeholder:'Insira Sigla', value:'model.sigla', type:'text'},
    {key:'endereco', label:'Endereço:', placeholder:'Insira endereço', value:'model.endereco', type:'textarea'},
    {key:'preco_consulta', label:'Preço Consulta:', placeholder:'Insira preço da consulta neste consultório', value:'model.preco_consulta', type:'text'},
    {key:'custo_consulta', label:'Custo Consulta:', placeholder:'Insira custo deste consultório por consulta', value:'model.custo_consulta', type:'text'},
  ],

  validations: {
    'nome': {
      presence:  { message: "Presença obrigatória." },
      length: { minimum: 6 , messages:{tooShort: "Mínimo de 6 caracteres."}}
    },
    'sigla': {
      presence:  { message: "Presença obrigatória." },
      length: { maximum: 5 , messages:{tooLong: "Máximo de 5 caracteres."}}
    },
    'preco_consulta': {
      format: { with: /^[0-9,.]*$/, message: 'Apenas um número sem casas decimais' },
      presence: { message: "Presença obrigatória." },

    },
    'custo_consulta': {
      format: { with: /^[0-9,.]*$/, message: 'Apenas um número sem casas decimais' },
      presence: { message: "Presença obrigatória." },

    }
  }


});
