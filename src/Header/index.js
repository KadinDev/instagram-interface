import React from 'react';

import {
    Container,
    Button,
    ButtonsHeader,
    Logo,
    Send
} from './styles';

export function Header(){
    return (
        <Container>

            <Button
                activeOpacity={0.7}
            >
                <Logo
                    source={require('../img/logo.png')}
                />
            </Button>

            <ButtonsHeader>

                <Button
                    activeOpacity={0.7}
                >
                    <Send
                        style={{marginRight: 15}}
                        source={require('../img/add.png')}
                    />
                </Button>

                <Button
                    activeOpacity={0.7}
                >
                    <Send
                        style={{marginRight: 15}}
                        source={require('../img/like.png')}
                    />
                </Button>

                <Button
                    activeOpacity={0.7}
                >
                    <Send
                        source={require('../img/send.png')}
                    />
                </Button>

            </ButtonsHeader>

        </Container>
    )
}