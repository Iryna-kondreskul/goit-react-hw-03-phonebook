import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css'
 
class App extends Component {
  
  state = {
    contacts: [],
    filter:'',
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    }
    
    componentDidMount(){
      const localData = localStorage.getItem('contacts')
      if(localData){
        this.setState({contacts:JSON.parse(localData)})
      }
    }
    

  addContact = (data) => {
    const newContact = {
     ...data,
    id:nanoid(),
  }
    console.log(newContact);

 this.state.contacts.find(contact => contact.name === data.name)
 ? alert('Контакт з таким ім\'ям уже існує')
 : this.setState(({ contacts }) => ({
  contacts: [newContact, ...contacts],
}));
  console.log(data)
   }

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };



  render () {
    
    return (
      <div className={css.container}>
        
      <h1 className={css.title}>Phone
      <span className={css.spanColor}>book</span>
      </h1>

      <ContactForm onSubmit={this.addContact} />

      <h2 className={css.header}>Contacts</h2>

      {/* <Filter /> */}
      <ContactList 
      contacts={this.state.contacts} 
      onDeleteContact={this.deleteContact}/>

      </div>
    );
  }
}

export default App;