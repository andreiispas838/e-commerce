import React from 'react';
import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 1.25rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 1.25rem;
  ${mobile({ margin: '0 1.25rem', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 0.6rem;
  margin-right: 1.25rem;
  ${mobile({ margin: '.6rem 0' })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Black</Option>
            <Option>Purple</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
