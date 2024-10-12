// src/pages/MenuPage.js
import React from 'react';
import styled from 'styled-components';
import CustomerNavbar from '../components/CustomerNavbar';

const MenuContainer = styled.div`
  padding: 0px;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const DishesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DishCard = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
  padding: 15px;
  margin: 15px;
  width: 250px;
  border-radius: 0px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DishImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0px;
`;

const DishName = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-top: 10px;
`;

const DishPrice = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const MenuPage = () => {
  const dishes = [
    { name: 'Margherita Pizza', price: '$12', img: 'https://images.pexels.com/photos/28866020/pexels-photo-28866020/free-photo-of-freshly-baked-artisanal-pizza-served-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Spaghetti Carbonara', price: '$15', img: 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Lasagna', price: '$14', img: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Risotto', price: '$18', img: 'https://images.pexels.com/photos/6544227/pexels-photo-6544227.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Bruschetta', price: '$10', img: 'https://images.pexels.com/photos/5602720/pexels-photo-5602720.jpeg?auto=compress&cs=tinysrgb&w=6000' },
    { name: 'Tiramisu', price: '$8', img: 'https://images.pexels.com/photos/1190165/pexels-photo-1190165.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <MenuContainer>
      <CustomerNavbar />
      <h1>Our Menu</h1>
      <DishesContainer>
        {dishes.map((dish, index) => (
          <DishCard key={index}>
            <DishImage src={dish.img} alt={dish.name} />
            <DishName>{dish.name}</DishName>
            <DishPrice>{dish.price}</DishPrice>
          </DishCard>
        ))}
      </DishesContainer>
    </MenuContainer>
  );
};

export default MenuPage;
