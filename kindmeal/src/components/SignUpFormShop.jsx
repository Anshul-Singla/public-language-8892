import { Box, Flex, Heading, Link, Text,  List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from "@chakra-ui/react";
import {SignUpForm} from "../components/SignupForm";
function SignUpFormShop(){
    return (
        <Box w='60%' margin='0 auto' p='5' textAlign='left'>
            <Box margin='20px 0 '  >
                <Heading fontSize='2vw' fontWeight='500' >Restaurant / Shop Owner? Sign Up Now. </Heading>
                <Text color='blackAlpha.900' fontWeight='500' >Improve your business, build brand loyalty, and save precious animal lives! Join KindMeal now to enjoy the following features:</Text>
                <Box>
                    <UnorderedList margin='20px 0 20px 50px ' >
                        <ListItem>Effectively reach over 200,000 consumers</ListItem>
                        <ListItem>Feature your shop across premium partner platforms & media channels</ListItem>
                        <ListItem>Offer coupons & deals to attract new customers</ListItem>
                        <ListItem>Showcase your delicious meat-free meals</ListItem>
                        <ListItem>Interact with our community of food lovers</ListItem>
                    </UnorderedList>
                </Box>
                <Text color='blackAlpha.900' fontWeight='500' >To support our welfare causes, we offer simple, affordable Premium Plans on a monthly subscription basis, starting from RM 99 only. No deal commissions, no hidden fees. Premium Plan details are available upon signing up.</Text>
            </Box>
            <Box mt='50px'>
                <Heading color='#666666' fontWeight='500' >Personal Profile</Heading>
                <Text>First, we setup your personal profile, then proceed to configure your shop promotions.</Text>
                <SignUpForm/>
            </Box>
        </Box>
    )
}
export default SignUpFormShop;