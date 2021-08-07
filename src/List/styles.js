import styled from 'styled-components/native';

import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { Image, TouchableOpacity } from 'react-native';

export const Container = styled.View`
`;

export const ViewPerfil = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px;
    flex: 1;
`;

export const ImagePerfil = styled(Image)`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
    border-radius: 50px;
`;

export const NameUser = styled.Text`
    padding-left: 5px;
    font-size: ${RFValue(16)}px;
    text-transform: lowercase;
    color: #000;
`;

export const ImagePublished = styled(Image)`
    height: ${RFValue(400)}px;
    align-items: center;
`;

export const AreaBtn = styled.View`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    margin-left: ${RFValue(10)}px;
    justify-content: space-between;
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BtnLike = styled(TouchableOpacity)`
`;

export const ImageBtnLike = styled(Image)`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;
`;

export const BtnComentary = styled(TouchableOpacity)`
`;

export const ImageBtnComentary = styled(Image)`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;   
`;

export const BtnSend = styled(TouchableOpacity)`
`;

export const ImageBtnSend = styled(Image)`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Favotire = styled.View``;

export const ImageBtnFavorite = styled(Image)`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    margin-right: ${RFValue(10)}px;
`;

export const TotalLikers = styled.Text`
    font-weight: bold;
    margin-left: ${RFValue(10)}px;
    margin-top: ${RFValue(10)}px;
    font-size: 16px;
    line-height: 18px;
    opacity: 0.9;
    opacity: 0.7;
`;

export const NameAuthor = styled.Text`
    margin-left: ${RFValue(10)}px;
    margin-top: ${RFValue(5)}px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 15px;
    line-height: 18px;
    font-weight: normal;
    color: #111;
    margin-left: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;