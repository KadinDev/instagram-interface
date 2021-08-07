import styled from 'styled-components/native';

import {
    TouchableOpacity,
    Image,
} from 'react-native';

import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(55)}px;
    background-color: #FFF;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom-width: 0.4px;
`;

export const Button = styled(TouchableOpacity)`

`;

export const ButtonsHeader = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Logo = styled(Image)`
`;

export const Send = styled(Image)`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;
