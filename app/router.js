import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('nota-eletronica', function() {
    this.route('nota-eletronica', {path: '/nota-eletronica' });
  });
  this.route('definir-cliente', function() {
    this.route('definir-cliente', {path: '/definir-cliente' });
  });
  this.route('inserir-cliente', function() {
    this.route('inserir-cliente', {path: '/inserir-cliente' });
  });
  this.route('emitir-comprovante', function() {
    this.route('emitir-comprovante', {path: '/emitir-comprovante' });
  });
  
  this.route('pacientes', function() {
    this.route('show',{ path: '/:id'});
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id/edit' });
  });
  this.route('consultorios', function() {
    this.route('show',{ path: '/:id'});
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id/edit' });
  });
  this.route('atendimentos', function() {
    this.route('show',{ path: '/:id'});
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id/edit' });
  });
});
export default Router;