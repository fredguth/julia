import Ember from 'ember';
const { Component, Object } = Ember;
export default Ember.Component.extend({
  model: Object.create({
    _id:  new Date().toISOString(),
    nome: ''
  }),

  rules: {
    _id:  'required',
    nome: 'required'
  }
});
