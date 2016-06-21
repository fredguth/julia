import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      pacientes: store.findAll('paciente')
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    createPaciente: function() {
      this.controllerFor('paciente').set('globals.isEditing', true);
      var novoPaciente = this.store.createRecord('paciente');
      let now = new Date();
      novoPaciente.set('createdAt' , now);
      novoPaciente.set('_id', now.toISOString() );
      this.transitionTo('paciente', newPost.save());
    },

    savePost: function() {
      this.modelFor('post').save();
    },

    deletePost: function() {
      this.modelFor('post').destroyRecord().then(function() {
        this.transitionTo('posts');
      }.bind(this));
    }
  }
});
