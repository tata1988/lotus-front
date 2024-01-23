import { Component } from 'react';
import './index.css';
import ApiService from '../../services/apiService';
import Person from '../Person';
import Spinner from '../Spinner';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            people: null,
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

     api = new ApiService();

     onPersonLoading = () => {
        this.setState({
            loading: true
        })
    }

     onPersonLoaded = (people) => {
        this.setState({
            people,
            value: '',
            loading: false,
        })
    }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.onPersonLoading();
        this.api.getUser(this.state.value)
        .then(this.onPersonLoaded)
        .catch((error) => console.error(error))
      }

    render() {
        return (
            <div className='search'>
                <h1 className='title'>The Star Wars Search</h1>
                <form onSubmit={this.handleSubmit} className='form'>
                    <input 
                    className='input'
                    type="text" 
                    placeholder='Name' 
                    value={this.state.value} 
                    onChange={this.handleChange}/>
                    <button className='btn' type='submit'>Search</button>
                </form>

                <div className='wrapper'>
                {this.state.loading ? <Spinner /> : (
                     <div className="table">
                     {this.state.people !== null && this.state.people.length ? (
                         <div className="thead">
                             <div className="tr">
                                 <div className="td">Name</div>
                                 <div className="td">Birth year</div>
                                 <div className="td">Eye color</div>
                                 <div className="td">Gender</div>
                                 <div className="td">Hair color</div>
                                 <div className="td">Height</div>
                                 <div className="td td_last">Mass</div>
                             </div>
                         </div>
                         ) : null
                     }
                     
                     {this.state.people?.length ? 
                     (<div className='tbody'> 
                         {this.state.people.map((item, i) => {
                         return (
                             <Person key={i} data={item}/>
                         ) 
                     })}  
                     </div>) : this.state.people === null ? null : (<div className='message'>Ничего не найдено по вашему запросу...</div>)
                     }
                    </div>
                )}
                   
                    
                </div>
            </div>
        )
    }
 
}

export default Search

