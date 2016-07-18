import Ember from 'ember';
const { Component } = Ember;

export default Ember.Component.extend({
  actions:{
    submitAction() {
      this.get('paciente.isValid') && this.get('submitAction')(this.get('paciente'));
    }
  }
});
