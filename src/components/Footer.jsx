import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 1.25rem 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h3`
  margin-bottom: 1.875rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.6rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CIUPII.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum tenetur aliquid ducimus, enim laudantium doloremque recusandae ad eveniet molestias voluptate nihil eius fugiat ipsum quibusdam molestiae autem! Voluptas, illo.</Desc>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='e60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '.6rem' }} /> Calea Severinului nr. 108, Craiova
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '.6rem' }} /> +40 756 349 861
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '.6rem' }} />
          contact@example.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
