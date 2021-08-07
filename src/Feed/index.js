import React, { useState } from 'react';

import {
  FlatListFeed,
} from './styles';


import { ListFeed } from '../List';

export function Feed(){

    const [ feed, setFeed ] = useState([
      {
        id: '1', 
        nome: 'Lucas Silva', 
        descricao: 'Belo lugar para passeio <3 ', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://www.lauraperuchi.com/wp-content/uploads/2020/06/jermaine-ee-A2CChTZvzTE-unsplash.jpg',  
        likeada: true, 
        likers: 100,
        salve: true
      },
      {
        id: '2', 
        nome: 'Matheus', 
        descricao: 'Isso sim é ser raiz!!!!!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
        likeada: false, 
        likers: 0,
        salve: false
      },
      {
        id: '3', 
        nome: 'Jose Augusto', 
        descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
        likeada: false, 
        likers: 3,
        salve: true
      },
      {
        id: '4', 
        nome: 'Gustavo Henrique', 
        descricao: 'Isso sim que é TI!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
        likeada: false, 
        likers: 1,
        salve: true
      },
      {
        id: '5', 
        nome: 'Guilherme', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 32,
        salve: true
      }
    ])

    return (
            
      <FlatListFeed
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id }
        data={ feed }
        renderItem={ ({item}) => <ListFeed data={item} /> }
      />

    )
}