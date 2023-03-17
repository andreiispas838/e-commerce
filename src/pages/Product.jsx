import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3.125rem;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 1.25rem 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 1.875rem 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.3rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.6rem;
  padding: 0.3rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 0.6rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  font-weight: 500;
  background-color: white;
  cursor: pointer;
  border-radius: 0.2rem;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://www.na-kd.com/globalassets/skinny_high_waist_jeans_1660-000120-00472283.jpg?ref=A89484ECA9' />
        </ImgContainer>
        <InfoContainer>
          <Title>Skinny High Waist Stretch Jeans</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus repellat, nobis molestiae error suscipit explicabo quisquam perspiciatis exercitationem voluptatum nulla, eius quo inventore repudiandae nisi porro fugit. Beatae, totam?</Desc>
          <Price>$ 99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='lightblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
