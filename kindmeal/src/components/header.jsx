import { Box, Button, Center, Flex, Image, Spacer, Text, Tooltip } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import SignUpForm from "./Signup";

function Header(){
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
                    <Text  ml={5}  fontSize='1.25vw'  >Login</Text>
                    <Button ml={5}  fontSize='1.5vw' colorScheme='facebook' >Facebook</Button>
                    <LoginForm text='Email' buttonStyles = {FormStyle.loginButtonStyle} />
                    <Box borderLeft='1px' borderLeftColor='gray.600' mr={5} ml={5} >
                        <SignUpForm text='Sign Up' textStyle={FormStyle.signUpTextStyle}  />
                    </Box>
                </Flex>
            </Center>
            <Box w='100%' bg='#2BB673' >
                <Center>
                    <Flex w='80vw' justifyContent='space-between'>
                        <Text p={2} fontSize='1.5vw' color='#fff' bg='blackAlpha.300' cursor='pointer' >Home</Text>
                        <Text p={2} fontSize='1.5vw' color='#fff' _hover={onHoverStyle} cursor='pointer' >Meal Deals</Text>
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