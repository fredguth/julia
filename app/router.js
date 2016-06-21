import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pacientes', function() {
    this.route('single', function() {
      this.route('new');
      this.route('edit');
      this.route('delete');
    });
  });
});

export default Router;
