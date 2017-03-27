import Ember from 'ember';
import CPF from 'npm:gerador-validador-cpf';
import config from 'julia/config/environment';

const cpfcnpjKEY = config.cpfCnpj.KEY;

export default Ember.Component.extend({
  // matcher (option, term) {
  //   let text = accentFold(option.get('nome').toLowerCase());
  //   term = accentFold(term.toLowerCase());
  //   return text.indexOf(term);
  // },
  actions:{

    onCEPChange(value, model, key) {

      if (key==='cep') {

        if (value.length > 7) {
          try {
            Ember.$.ajax({

              url: `https://viacep.com.br/ws/${value}/json`,
              type: 'GET',
              success: (response) => {
                console.log('sucess:', response);
                this.set('paciente.cep', response.cep);
                this.set('paciente.logradouro', response.logradouro);
                this.set('paciente.complemento', response.complemento);
                this.set('paciente.bairro', response.bairro);
                this.set('paciente.cidade', response.localidade);
                this.set('paciente.uf', response.uf);
              },
              error: (response) => {
                console.error('error:', response);
              }
            });

          } catch (err) {
            console.error(err);
          }
        }
      }
    },

    onCPFChange(value, model, key) {
      if (key==='cpf') {
        value = value.replace(/\D/g,'');
        if (value.length===11)  {
          if (CPF.validate(value)) {
            try {
              Ember.$.ajax({

                url: `https://api.cpfcnpj.com.br/${cpfcnpjKEY}/1/json/${value}`,
                type: 'GET',
                success: (response) => {
                  this.set('paciente.nome', response.nome);
                },
                error: (response) => {
                  console.error('error:', response);
                },
              });
            } catch (err) {
              console.error(err);
            }
          } else {
            console.log('CPF inválido:', value);
          }

        }
      }
    },


    add() {
       this.get('paciente').validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          this.get('submitAction')(this.get('paciente'));
        } else {
          console.log('invalid.')
        }
      });
    }
  }
});