import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button,Image,Text,Flex,Link,Box,Spacer,
  } from '@chakra-ui/react'
import { useContext } from 'react';
import {   useNavigate,
  Link as RouterLink,//an !important think to learn....
 } from 'react-router-dom';
import Actions from '../context/actionCreator';
import { AppContext } from '../context/AppContext';
  function SignUpModalForm({text , textStyle}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const {state,dispatch} = useContext(AppContext);
    // console.log(state);
    return (
      <>
        <Text as='button' style={textStyle} onClick={onOpen}>{text}</Text>
  
        <Modal  isOpen={isOpen} onClose={onClose} size='2xl' isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex flexDirection='column' justifyContent='center' alignItems='center' >
                <Image src='https://www.kindmeal.my/images/logo-kindmeal.png'  w='75%'    />
                <Text fontSize='2vw' color='#666666' >Join KindMeal For FREE Now</Text>
                <Text fontSize='1vw' color='#666666' >Please select the type of membership to proceed</Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box as='button'  border="2px solid grey" rounded={5} p={1} mb={5} onClick={()=>( navigate('/join'),dispatch({type:Actions.INDIVIDUAL_TRUE}))} >
                <Flex gap={5}        >
                  <Image src='https://www.kindmeal.my/images/join_normal.png'  w='50%' h='50%'       />
                  <Box>
                    <Text mb={2}  fontSize='1.5vw'color='#000' fontWeight='500' >Food Lover</Text>
                    <Text fontSize='1.20vw'color='#666666' >Join FREE to enjoy yummy deals, share       reviews & meet our community of compassionate food lovers.
                    </Text>
                  </Box>
                 </Flex>
              </Box>
              <Box as='button' border="2px solid grey" rounded={5} p={1} onClick={()=>(navigate('/join'),dispatch({type:Actions.INDIVIDUAL_false})) } >
                <Flex gap={5}        >
                  <Image w='50%' h='50%' src='https://www.kindmeal.my/images/join_shop.png'         />
                  <Box>
                    <Text mb={2}  fontSize='1.5vw'color='#000' fontWeight='500' >Restaurant / Shop Owner</Text>
                    <Text  >List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.
                    </Text>
                  </Box>
                 </Flex>
              </Box>
            </ModalBody>
  
              <Flex m={3}>
                <Link fontSize='1.5vw'color='#666666' >Member Login</Link>
                <Spacer/>
                <Link fontSize='1.5vw'color='#666666' >Forget password?</Link>
              </Flex>
            
          </ModalContent>
        </Modal>
      </>
    )
  }
export default SignUpModalForm;