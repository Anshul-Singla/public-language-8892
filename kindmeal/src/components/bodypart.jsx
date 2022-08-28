import { Box, Center, Flex, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react";

function Body(){
    const galleryComponent1Props={
        heading:'Latest News & Videos',
        link1:'Save Lives with Your Blog',
        link2:'News & Articles',
        link3:'Floow Our Facebook',
        src1:'https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/242686007_668566214572943_2041929545932471436_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=swstQO7Pd7YAX91XMo8&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-4o-2jiwrCemKN_wZ2qRAMG1XZFQ-nsaIngDrO2ETbxg&oe=6310ACED',
        imgText1:'The Top 7 Smartest Animals',
        src2:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/21707660_1430313403713822_4780572855584686080_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RcBoqAsP5BcAX8IlQCB&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT86ngFWk7axc_ZePJi07LZ5zK_e1S33BI1VqIfzQv82gA&oe=6309CC86',
        imgText2:'Creamy Hasselback Potatoes',
        src3:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297490495_5300872103341148_4812180245387187070_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=VfNjjhciLoUAX86UY6i&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT_GHdGkvDhzxO3jgLTv94G2xASUrj-lxmmXAlVC-BxDQA&oe=630A5A29',
        imgText3:'Busy Beaver Delivers Lettuce To Zoo Friends',
        src4:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297116651_384596210475584_5376654219115704349_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ggyHZY5ZmbAAX9m9siT&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT9F76zk5d8CEhk0uLfmlJg51NvLuF5wuf5Q3y0xPiVyUg&oe=630B021C',
        imgText4:'Teaching My Pet Pig To Talk 🐷',
        src5:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297287041_759478638588669_7244009508553843157_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RDmX5SwUhPkAX-8LWo3&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT_UBq4TcazOWct44fdPWhg4yxetA2qAzBeAjEMDDlxvAg&oe=630A3112',
        imgText5:'Hatching Animals 🐣',
        imgH:'80%',
        boxH:'250px',
    }
    const galleryComponent2Props={
        heading:'Yummylicious Moments',
        link1:'Secret Recipes ',
        link2:' Member Hot Picks ',
        link3:' Photo Moments',
        src1:'https://www.kindmeal.my/photos/moment/24/24309-46678-s.jpg',
        imgHeading1:'Destin Vegetarian Restaurant',
        imgText1:'VyVian',
        src2:'https://www.kindmeal.my/photos/deal/7/707-4819-s.jpg',
        imgHeading2:'Simple Is the Best',
        imgText2:'jolenesaw',
        src3:'https://www.kindmeal.my/photos/moment/24/24307-46677-s.jpg',
        imgHeading3:'Restaurant Hao Kai Xin 街頭燒蟹炒啦啦',
        imgText3:'karenkhong',
        src4:'https://www.kindmeal.my/photos/deal/7/717-5054-s.jpg',
        imgHeading4:'Your Healthier Options',
        imgText4:'munhaoyoong',
        src5:'https://www.kindmeal.my/photos/moment/24/24305-46676-s.jpg',
        imgHeading5:'Amelio Desa Parkcity',
        imgText5:'FatJedi',
        imgH:'70%',
        boxH:'270px',
    }
    const galleryComponent3Props={
        heading:'Discover Restaurants',
        link1:' Vegetarian Directory ',
        link2:'   Restaurant Menu ',
        link3:'  Food Map',
        src1:'https://www.kindmeal.my/photos/item/0/564-7788-s.jpg',
        imgText1:'Black Vinegar Rice',
        src2:'https://www.kindmeal.my/photos/item/0/567-7919-s.jpg',
        imgText2:'Bibimbap',
        src3:'https://www.kindmeal.my/photos/item/0/201-1916-s.jpg',
        imgText3:'Bun Family',
        src4:'https://www.kindmeal.my/photos/item/0/494-6160-s.jpg',
        imgText4:'Garden Burger',
        src5:'https://www.kindmeal.my/photos/item/0/117-1066-s.jpg',
        imgText5:'Moist Chocolate Cake With Apple Crumble',
        imgH:'80%',
        boxH:'270px',
    }
    const galleryComponent4Props={
        heading:'Amazing Superheroes',
        link1:'Latest Buzz ',
        link2:' Lifestyle Ambassadors ',
        link3:' Win Gifts! ',
        src1:'https://www.kindmeal.my/photos/member/32/32589-m.jpg',
        imgText1:'YongKengCheng',
        src2:'https://www.kindmeal.my/photos/member/24/24811-m.jpg',
        imgText2:'ChanYiXuan',
        src3:'https://www.kindmeal.my/photos/member/24/24507-m.jpg',
        imgText3:'AngJosephine',
        src4:'https://www.kindmeal.my/photos/member/19/19027-m.jpg',
        imgText4:'KcGoh',
        src5:'https://www.kindmeal.my/photos/member/34/34361-m.jpg',
        imgText5:'TrinnyTham1',
        imgH:'80%',
        boxH:'250px',
    }
    return (
        <div>
            <div style={{backgroundColor:'#ececec'}}>
                <GalleryComponent props={galleryComponent1Props}  />
                <GalleryComponent props={galleryComponent2Props}/>
                <GalleryComponent props={galleryComponent3Props}/>
                <GalleryComponent props={galleryComponent4Props} />
            </div>
            <div>
                <FeatureComponent/>
            </div>
            
        </div>
    )
}

function FeatureComponent(){
    const cardProps1 = {
        src:'https://www.kindmeal.my/images/intro_deal.png',
        heading:'Get Great Deals',
        text:'Show our FREE digital coupons to instantly enjoy exciting deals'
    }
    const cardProps2 = {
        src:'https://www.kindmeal.my/images/intro_kindmoment.png',
        heading:'Share KindMoments',
        text:'Spread the joy by sharing your yummy dining moments'
    }
    const cardProps3 = {
        src:'https://www.kindmeal.my/images/intro_menu.png',
        heading:'Discover Delicious Food',
        text:'Explore the latest exquisite offerings and creative menus'
    }
    const cardProps4 = {
        src:'https://www.kindmeal.my/images/intro_friends.png',
        heading:'Meet Food Lovers',
        text:'Make new, compassionate friends and share great food tips'
    }
    return (
        <div>
            <Center>
               
                <Box mt='50px' mb='30px'  >
                    <Heading color='#666666'>Introducing The World's 1st Meat-Free Lifestyle Platform</Heading>
                    <Flex justifyContent='center' mt={5} mb='30px'  gap={5}  >
                        <Text color='#999999' fontSize='2vw'  >Brought to you by</Text><Image w='32%'  src="https://www.kindmeal.my/images/logo-petfinder.png" ></Image>
                    </Flex>
                    <Text color='#888888'fontSize='2vw' >Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>
                </Box>
            </Center>
            <Center>
                <Box w='80%' mt='20px' mb='40px' >
                    <Flex gap={8} >
                        <FeatureComponentCard props={cardProps1}     />
                        <FeatureComponentCard props={cardProps2}     />
                        <FeatureComponentCard props={cardProps3}     />
                        <FeatureComponentCard props={cardProps4}     />
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Text w='80% ' mt='40px' mb='40px'  fontSize='1.5vw' color='#666666'  >Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</Text>
            </Center>
            <Center>
                <Box w='40%' mt='60px' mb='60px' rounded={10}  bg='red.500' p={5} color='#fff' >
                    <Text fontSize='5xl' >Join KindMeal Now</Text>
                    <Text fontSize='large' >Your tasty journey begins here</Text>   
                </Box>
            </Center>
            <Center>
            <Text w='80% ' mt='10px' mb='10px'  fontSize='2vw' color='#888888'  >As Featured In</Text>
            </Center>
            <Center>
                <Image   mt='10px' mb='40px'  src='https://www.kindmeal.my/images/media-feature2.png'  />
            </Center>
                
            
        </div>
    )
}
function FeatureComponentCard({props}){
    return(
        <Center >
            <Flex className="featureCard" rounded='20px' p={4} h='300px' flexDirection='column' justifyContent='center' alignItems='center' color='#666666'  >
                <Image src={props.src}  w='80%'       />
                <Text fontSize='1.55vw'  > {props.heading}  </Text>
                <Text fontSize='0.95vw' > {props.text} </Text>
            </Flex>
        </Center>
    )
}

function GalleryComponent({props}  ){
    // console.log(props)
    return (
        <div>
            <Center>
                <Box boxShadow='base' rounded='lg' w='80%'   p={3}  mt={5} mb={5} bg='white' >
                    <Flex alignItems='center' mb={4}>
                        <Text fontSize='1.5vw' color='gray'  > {props.heading} </Text>
                        <Spacer/>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link1} </Link>
                        <Text fontSize='1.5vw' mr={3} ml={3} >•</Text>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link2} </Link>
                        <Text fontSize='1.5vw' mr={3} ml={3} >•</Text>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link3} </Link>
                    </Flex>
                    <Flex gap={3} w='100%' >
                        <Box w='20%' h={props.boxH} >
                            <Image w='100%' h={props.imgH} src={props.src1}  rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading1} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText1} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH}>
                            <Image w='100%' h='200px'  src={props.src2} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading2} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText2} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH} >
                            <Image w='100%' h={props.imgH}  src={props.src3} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading3} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText3} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH}>
                            <Image w='100%' h={props.imgH}  src={props.src4} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading4} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText4} </Text>
                        </Box>
                        <Box w='20%' h={props.boxH} >
                            <Image w='100%' h={props.imgH}   src={props.src5} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading5} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText5} </Text>
                        </Box>
                    </Flex>
                </Box>
            </Center>
            
        </div>
    )
}
export default Body;