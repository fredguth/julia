import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  rev: attr('string'),
  _id: attr('string'),

  nome:         attr('string'),
  telefone:     attr('string'),
  email:        attr('string'),
  cpf:          attr('number'),
  cep:          attr('number'),
  endereco:     attr('string'),
  quem_indicou: attr('string'),
  criado_em:    attr('date')


});
