import { Box, Center, Flex, Heading, Image,List,
    ListItem,
    Text,
    UnorderedList,   } from '@chakra-ui/react'
function Footer(){
    return (
        <div>
            <Center bg='#ececec' >
                <Image   h='90%'  w='80%' src='https://www.kindmeal.my/images/banner_whykindmeal.png'/>
            </Center>
            <Center bg='#2BB673' w='100%'  >
                <Box>
                    <Flex gap={8}  mt={10} mb={10} >
                        <UnorderedList listStyleType='none' textAlign='left'>
                            <Heading as='h6' size='xs'  color='#fff' >General</Heading>
                            <ListItem color='#fff' >Home</ListItem>
                            <ListItem color='#fff' >Sign Up</ListItem>
                            <ListItem color='#fff' >Businesses / Restaurateurs</ListItem>
                            <ListItem color='#fff' >Advertising</ListItem>
                            <ListItem color='#fff' >About KindMeal.my</ListItem>
                            <ListItem color='#fff' >Help & FAQ</ListItem>
                            <ListItem color='#fff' >Terms & Conditions</ListItem>
                            <ListItem color='#fff' >Inspiring Partners</ListItem>
                            <ListItem color='#fff' >Lifestyle Ambassadors</ListItem>
                            <ListItem color='#fff' >Jobs & Careers</ListItem>
                            <ListItem color='#fff' >Contact Us</ListItem>
                        </UnorderedList>
                        <UnorderedList listStyleType='none' textAlign='left'>
                            <Heading as='h6' size='xs'  color='#fff' >Features</Heading>
                            <ListItem color='#fff' > Meat-Free Deals</ListItem>
                            <ListItem color='#fff' >Tasty Menus</ListItem>
                            <ListItem color='#fff' >Kind Moments</ListItem>
                            <ListItem color='#fff' >Meat-Free Recipes</ListItem>
                            <ListItem color='#fff' >Member Recommendations</ListItem>
                            <ListItem color='#fff' >Featured Restaurants</ListItem>
                            <ListItem color='#fff' >Vegetarian & Vegan Directory</ListItem>
                            <ListItem color='#fff' >Food Map</ListItem>
                            <ListItem color='#fff' >Become A Superhero</ListItem>
                            <ListItem color='#fff' >Vegan News & Vegetarian Articles</ListItem>
                            <ListItem color='#fff' >Latest Comments</ListItem>
                        </UnorderedList>
                        <UnorderedList listStyleType='none' textAlign='left'>
                            <Heading as='h6' size='xs'  color='#fff' >Social Media</Heading>
                            <ListItem color='#fff' >KindMeal Widget </ListItem>
                            <ListItem color='#fff' >Facebook</ListItem>
                            <ListItem color='#fff' >Twitter</ListItem>
                            <ListItem color='#fff' >Instagram</ListItem>
                        </UnorderedList>
                        <UnorderedList listStyleType='none' textAlign='left'>
                            <Heading as='h6' size='xs'  color='#fff' >Mobile</Heading>
                            <ListItem color='#fff' >iPhone & iPod App</ListItem>
                            <ListItem color='#fff' >Android App</ListItem>
                            
                            <Heading mt={8} as='h6' size='xs'  color='#fff' >Exciting Promos</Heading>
                            <ListItem color='#fff' >Gadhimai: Ending Mass Slaughter </ListItem>
                            <ListItem color='#fff' >Free Meals</ListItem>
                            <ListItem color='#fff' >Food Bloggers</ListItem>
                            <ListItem color='#fff' >Uber CHIRP</ListItem>
                            <ListItem color='#fff' >Jane Goodall Contest</ListItem>
                            <ListItem color='#fff' >Win Digi iPhone 6</ListItem>
                            <ListItem color='#fff' >Feed The Poor</ListItem>
                            <ListItem color='#fff' >Win Superhero Gifts</ListItem>
                            <ListItem color='#fff' >Win an iPad Mini 3</ListItem>
                        </UnorderedList>
                        <UnorderedList listStyleType='none' textAlign='left'>
                            <Heading as='h6' size='xs'  color='#fff' >PetFinder.my</Heading>
                            <ListItem color='#fff' >Adopt A Pet</ListItem>
                            <ListItem color='#fff' >Smartphone Apps</ListItem>
                            <ListItem color='#fff' >WAGazine</ListItem>
                            <ListItem color='#fff' >Discussion Forum</ListItem>
                            <ListItem color='#fff' >Medical Fund</ListItem>
                        </UnorderedList>
                    </Flex>
                    <Text color='#fff' size='xs'>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</Text>
                    <Text color='#fff' size='xs'>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>

                </Box>
            </Center>
            
        </div>
    )
}
export default Footer;