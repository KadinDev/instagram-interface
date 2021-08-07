import React from 'react';

import {
    Container,
    ViewPerfil,
    ImagePerfil,
    NameUser,
    ImagePublished,
    AreaBtn,
    ContainerBtn,
    BtnLike,
    ImageBtnLike,
    BtnComentary,
    ImageBtnComentary,
    BtnSend,
    Favotire,
    ImageBtnSend,
    ImageBtnFavorite,
    TotalLikers,
    NameAuthor,
    Description
 } from './styles';



//recebo os itens via props (propriedades),
//assim consigo pegar as informações no data={ feed } linha 67
//do FlatListFeed, 
export function ListFeed(props){

    // ver se hover like mostra coração curtido
    // se não mostra o coração preto e branco
    function loadIcon(likeada){
        return likeada ? require('../img/likeada.png') :
        require('../img/like.png')
    };


    function showLikers(likers){
        if(likers === 0){
            return;
        }

        return(
            <TotalLikers> 
            
                { likers } { likers > 1 ? 'curtidas' : 'curtida' } 
            
            </TotalLikers>
        );
    }

    function iconFavorite(salve){
        return salve ? require('../img/favoritetrue.jpg') :
        require('../img/favoritefalse.png')
    }

    return (
        <Container>

            <ViewPerfil>
                <ImagePerfil
                    source={{uri: props.data.imgperfil}}
                />
                <NameUser> {props.data.nome} </NameUser>
            </ViewPerfil>

            <ImagePublished
                resizeMode="cover"//nao importa o tamanho da img vai encaixar nas medidas definidas no css
                source={{uri: props.data.imgPublicacao}}
            />

            <AreaBtn>

                <ContainerBtn>

                    <BtnLike
                        activeOpacity={0.5}
                    >
                        <ImageBtnLike
                            source={ loadIcon(props.data.likeada) }
                        />
                    </BtnLike>

                    <BtnComentary
                        activeOpacity={0.5}
                    >
                        <ImageBtnComentary
                            source={require('../img/comment.png')}
                        />
                    </BtnComentary>

                    <BtnSend
                        activeOpacity={0.5}
                    >
                        <ImageBtnSend
                            source={require('../img/send.png')}
                        />
                    </BtnSend>
                </ContainerBtn>

                <Favotire>
                    <BtnSend
                        activeOpacity={0.5}
                    >
                        <ImageBtnFavorite
                            source={ iconFavorite(props.data.salve) }
                        />
                    </BtnSend>
                </Favotire>

            </AreaBtn>

            { showLikers(props.data.likers) }

            <NameAuthor>
                { props.data.nome }
        
            </NameAuthor>

            <Description>
                { props.data.descricao }
            </Description>

        </Container>
    )
}