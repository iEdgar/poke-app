import React,{Component, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';

class PokeListContainer extends Component{

    state = {
        pokeData: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            const pokeData = res.data.results;

            this.setState({
                pokeData: pokeData
            })
        }).catch(console.log);
    }

    render(){

        const { pokeData } = this.state;

        return(
            <Fragment>
                <AppNav />
                <List pokedata={pokeData} />
            </Fragment>
        );
    }
}

export default PokeListContainer;