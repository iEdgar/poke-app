import React,{Component, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

        const { classes } = this.props;
        const { pokeData } = this.state;

        return(
            <Fragment>
                <AppBar position="static" className={classes.NavColor}>
                    <Toolbar variant="dense">
                        <Typography variant="h6">
                            PokeApp
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List pokedata={pokeData} />
            </Fragment>
        );
    }
}

export default withStyles({
    NavColor:{
        backgroundColor: '#333333'
    }
})(PokeListContainer);