import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  rev: attr('string'),

  nome:         attr('string'),
  telefone:     attr('string'),
  email:        attr('string'),
  cpf:          attr('string'),
  cep:          attr('string'),
  endereco:     attr('string'),
  quem_indicou: attr('string'),
  criado_em:    attr('date')


});
