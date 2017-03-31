import Ember from 'ember';
const { Component } = Ember;

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['lista-notas'],
	status: 'emitida', //emitida, aguardando, processando
	type: 'nota', // nota, registro
});
