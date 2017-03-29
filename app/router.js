import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notas', function() {
    this.route('notas', {path: '/notas' });
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