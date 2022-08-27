import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Text,
    Center,
    Flex,
    Link
  } from '@chakra-ui/react'
  import { TiSocialFacebookCircular } from 'react-icons/fa';
  function LoginModalForm({text , buttonStyles}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // console.log(useDisclosure())
    return (
      <>
        <Button style={buttonStyles} onClick={onOpen}>{text}</Button>
        <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered  >
          <ModalOverlay />
          <ModalContent  padding='20px 0 '   >
            <ModalHeader ml='20px'>
                <Center>
                  <Image src='https://www.kindmeal.my/images/logo-kindmeal.png' />
                </Center> 
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <FormControl style={{ 
                        display:"Flex" ,
                        flexDirection:'column',
                        justifyContent:'center' ,
                        alignItems:'center' ,
                        gap:'20px',
                        height:'250px'
                        }} >
                    <Text fontSize='2vw' color='#666666' >Member Login</Text>
                    <Input type='email' fontSize='1.5vw' placeholder='Your Email' w='80%'  />
                    <Input type='password' fontSize='1.5vw' placeholder='Your Password' w='80%'  />
                    <Input bg='#2BB673' fontSize='1.75vw' color='#fff' w='60%' type='submit' h='' value='Login' p={1} />
                </FormControl>
              </Box>
            </ModalBody>
            <Box borderTop='1px' borderColor='gray.400' ml={5} mr={5}  pt={5}>
              <Center>
                <Button pl={10} pr={10} colorScheme='facebook'  onClick={onClose}>Login With Facebook</Button>
              </Center>
            </Box>
            <Box  m={5} >
              <Flex justifyContent='space-between' >
                <Link fontSize='1.35vw' fontWeight='500' > Forget password?</Link>
                <Link fontSize='1.35vw' fontWeight='500' > Not a member? Sign up FREE! </Link>
              </Flex>
            </Box>
           
          </ModalContent>
        </Modal>
      </>
    )
  }
export default LoginModalForm;