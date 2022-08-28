import { Box, Button, Center, Flex, Image, Spacer, Text, Tooltip , Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider, } from "@chakra-ui/react";
// import { SiCodechef } from 'react-icons/fa';
import { TriangleDownIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginModalForm from "./LoginFormModalForm";
import SignUpModalForm from "./SignupModalForm";
import { AppContext } from "../context/AppContext";
import Actions from "../context/actionCreator";

function Header(){
    const {state , userData , dispatch} = useContext(AppContext)
    // console.log('state:', state)
    // console.log('userData:', userData)
    const navigate = useNavigate();
    const onHoverStyle={
        bg:'blackAlpha.300',
    }
    const FormStyle ={
        loginButtonStyle:{
            fontSize:'1.5vw',
            backgroundColor:'grey', 
            color:'#fff',
            marginLeft:'20px' 
        },
        signUpTextStyle:{
                // as:'button' , 
                fontSize:'1.25vw' , 
                paddingLeft: '20px ', 
        }        
    }
    return (
        <div>
            <Center>
                <Flex alignItems='center' w='80vw' >
                    <Image  w='25%' src='https://www.kindmeal.my/images/logo-kindmeal.png'/>
                    <Spacer/>
                    <Tooltip label="Saves Lives with Your Blog - KindMeal.my Widget" aria-label='A tooltip'>
                        <Image   w='3.5%'  src='https://www.kindmeal.my/images/follow_blog_grey.png'/>
                    </Tooltip>
                    <Tooltip label="Follow KindMeal.my on Facebook" aria-label='A tooltip'>
                        <Image mr={3} ml={3} w='3.5%'  src='https://www.kindmeal.my/images/follow_facebook_grey.png'/>
                    </Tooltip>
                    <Tooltip label="Follow KindMeal.my on Twitter" aria-label='A tooltip'>
                        <Image  w='3.5%'  src=' https://www.kindmeal.my/images/follow_twitter_grey.png'/>
                    </Tooltip>
                    <Spacer/>
                    {
                        state.isAuth?
                        <Menu isLazy>
                            <MenuButton p={2}   _hover={{
                                backgroundColor:'gray.100'
                            }} >
                                <Flex justifyContent='center' alignItems='center' gap='6' >
                                    <Flex  alignItems='center' gap='2' color='gray' >
                                    <Text fontSize='1.2vw' >{`${userData.first_name} ${userData.last_name}  `}  </Text><TriangleDownIcon/>
                                    </Flex>
                                    <Image border='1px' borderColor='gray.200' p={1} src='https://www.kindmeal.my/images/no_photo_header.png'   />
                                </Flex>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>My Coupons</MenuItem>
                                <MenuItem>My Recipes</MenuItem>
                                <MenuItem>My KindMeal Profile</MenuItem>
                                <MenuItem>Update Profile</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem onClick={()=>{dispatch({type:Actions.LOGOUT_USER})}} >Logout</MenuItem>
                            </MenuList>
                        </Menu>
                        :

                    <Flex>
                        <Text  ml={5}  fontSize='1.25vw'  >Login</Text>
                        <Button ml={5}  fontSize='1.5vw' colorScheme='facebook' >Facebook</Button>
                        <LoginModalForm text='Email' buttonStyles = {FormStyle.loginButtonStyle} />
                        <Box borderLeft='1px' borderLeftColor='gray.600' mr={5} ml={5} >
                            <SignUpModalForm text='Sign Up' textStyle={FormStyle.signUpTextStyle}  />
                        </Box>
                    </Flex>
                    }
                    
                </Flex>
            </Center>
            <Box w='100%' bg='#2BB673' >
                <Center>
                    <Flex w='80vw' justifyContent='space-between'>
                        <Text p={2} fontSize='1.5vw' color='#fff' bg='blackAlpha.300' cursor='pointer' onClick={()=>{navigate('/')}} >Home</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' onClick={()=>{navigate('/mealdeal')}}   >Meal Deals</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >KindMoments</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Hot Picks</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Recipes</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Directory</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Articles</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Help</Text>
                    </Flex>
                </Center>
            </Box>
        </div>
    )
}
export default Header;