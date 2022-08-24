import { Box, Button, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";

function Header(){
    return (
        <div>
            <Center>
                <Flex alignItems='center' w='80%' >
                    <Image src='https://www.kindmeal.my/images/logo-kindmeal.png'/>
                    <Spacer/>
                    <Image  boxSize='50px'  src='https://www.kindmeal.my/images/follow_blog_grey.png'/>
                    <Image  boxSize='50px'  src='https://www.kindmeal.my/images/follow_facebook_grey.png'/>
                    <Image  boxSize='50px'  src=' https://www.kindmeal.my/images/follow_twitter_grey.png'/>
                    <Spacer/>
                    <Text ml={5}  >Login</Text>
                    <Button ml={5}   colorScheme='facebook' >Facebook</Button>
                    <Button ml={5}   bg='grey' color='#fff' >Email</Button>
                    <Text ml={5}  borderLeft='1px' borderLeftColor='gray.600' pl={5} mr={5} >Sign Up</Text>
                </Flex>
            </Center>
            <Box w='100%' bg='#2BB673' >
                <Center>
                    <Flex w='80%' justifyContent='space-between'>
                        <Text p={2} fontSize='xl' color='#fff' bg='blackAlpha.300' cursor='pointer' >Home</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Meal Deals</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >KindMoments</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Hot Picks</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Recipes</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Directory</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Articles</Text>
                        <Text p={2} fontSize='xl' color='#fff' cursor='pointer' >Help</Text>
                    </Flex>
                </Center>
            </Box>
        </div>
    )
}
export default Header;