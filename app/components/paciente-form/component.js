import Ember from 'ember';

const { Component } = Ember;


export default Ember.Component.extend({
  store: Ember.inject.service(),
  consultorioList: null,
  selectedConsultorio: null,

  didReceiveAttrs() {
    this._super(...arguments);

    let list = this.get('store').findAll('consultorio').then((consultorios)=>{
      return consultorios.toArray();
    });
    this.set('consultorioList', list);
  },
  actions:{
    submitAction() {
      this.get('model.isValid') && this.get('submitAction')(this.get('model'));
    },

    selectConsultorio(option) {
      this.set('model.consultorioPreferencia', option);
    }
  },

});
