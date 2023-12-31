import PropTypes from 'prop-types';
import { Component } from "react";
import css from './ContactForm.module.css'

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

    state = {
        name: '',
        number: '',
      };

      handleChenche = ({target}) => {
       this.setState({
        [target.name]:target.value,
       })
      }

     
      handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state);
        this.reset();
      };
    
      // очищаєм форму
      reset = () => {
        this.setState({ name: '', number: '' });
      };
    

  render(){
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
             <label className={css.label}>
                <span className={css.title}>Name</span>
                <input
                className={css.input}
                onChange={this.handleChenche}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                 />
             </label>
    
             <label className={css.label}>
                <span className={css.title}>Number</span>
                <input
                className={css.input}
                onChange={this.handleChenche}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
             </label>
    
             <button
                className={css.button} 
               type="submit">
               Add contact
             </button>
       </form>
        
    )
 
    
  } 

}

export default ContactForm;