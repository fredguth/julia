import Ember from 'ember';
const { Component } = Ember;

export default Ember.Component.extend({

  rules: {
    _id:  'required',
    nome: 'required',
    telefone: 'required',
    email: 'email',
    cpf: {regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/},

  },
  actions:{
    submitAction() {
      this.get('submitAction')(this.get('paciente'));
    }
  }
});
