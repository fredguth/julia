import Ember from 'ember';
import accentFold from 'julia/util/accentfold'
const formasDePagamento = [
      { nome: 'Depósito'},
      { nome: 'Dinheiro'},
      { nome: 'Cheque'},
    ];

export default Ember.Component.extend({
  horario: new Date(),
  consultorio: Ember.computed('paciente', function() {
    return this.get('paciente.consultorio_preferencia');
  }),
  valor: Ember.computed('consultorio', function() {
    return this.get('consultorio.preco_consulta');
  }),
  formasDePagamento: formasDePagamento,
  formaPagamento: formasDePagamento[0],
  extraPickadateOptions: {},
  extraPickatimeOptions: {interval: 15},

  matcher (option, term) {
    let text = accentFold(option.get('nome').toLowerCase());
    term = accentFold(term.toLowerCase());
    return text.indexOf(term);
  },
  actions:{
    submitAction() {
      this.set('atendimento.horario', this.get('horario'));
      this.set('atendimento.valor', this.get('valor'));
      this.set('atendimento.formaPagamento', this.get('formaPagamento'));
      this.set('atendimento.obs', this.get('obs'));
      this.set('atendimento.paciente', this.get('paciente'));
      this.set('atendimento.consultorio', this.get('consultorio'));
      this.get('atendimento.isValid') && this.get('submitAction')(this.get('atendimento'));
    },

    // selectPaciente(option) {
    //   this.set('paciente', option);
    // }
  },

});
