import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width:100%;
  height: 200px;
  align-items: flex-end;
`;

export const Closebutton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  padding: 32px 24px 0;
  flex: 1;
  background: #FAFAFA;
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;

`;

export const Ingredient = styled.Text`
  border: 1px solid rgba(204,204,204,.3);
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom:5px;
`;


export const Footer = styled.View`
  background: #FFF;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.View`
`;
