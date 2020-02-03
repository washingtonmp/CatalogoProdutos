/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'axios';


export default class ListaItens extends Component {

  constructor(props){
      super(props);
      this.state = { listaItens: [] };
  }

  componentWillMount(){
    // requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then( response => { this.setState({ listaItens: response.data }); })
    .catch(() => {console.log('Erro ao recuperar dados');} ); 

  }
  
  render(){
    return (
        <ScrollView style={{backgroundColor:'#DDD'}}>
            { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
        </ScrollView>
      );
  }
};

const styles = StyleSheet.create(

);
