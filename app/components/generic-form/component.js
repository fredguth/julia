import Ember from 'ember';
const { Component } = Ember;

export default Ember.Component.extend({
  actions:{
    submitAction() {
      this.get('model.isValid') && this.get('submitAction')(this.get('model'));
    },

    select(option) {
      this.set('model.selected', option);
    },

    onChange(value, model, key) {
      this.get('onChange') (value, model, key);
    }
  },

});
