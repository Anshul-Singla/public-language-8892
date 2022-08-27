import { Box, Button, Flex } from "@chakra-ui/react";

function Pagination({totalPages,currentPage , handlePageChange , handleOnePageChange}){
    const style={
        color:'#fff',

    }
    let pages = new Array(totalPages).fill(0).map((page,i)=> 
        <Button disabled={currentPage == i+1} fontSize='1.5vw' colorScheme='teal' variant='ghost' onClick={()=>{handlePageChange(i+1)}} > {i+1}  </Button>
        )
        return(
            <>
            <Flex w='80%' margin='50px auto' justifyContent='space-between'>
                <Button onClick={()=>{handleOnePageChange(-1)}} style={{visibility: currentPage==1 ? 'hidden' : 'visible' }} >  {"<<"} Prev </Button>
                <Flex   fontSize='1.5vw' alignItems='center' > Pages:  {pages} </Flex>
                <Button onClick={()=>{handleOnePageChange(+1)}} style={{visibility: currentPage != totalPages ? 'visible' : 'hidden' }} > Next{">>"} </Button>
            </Flex>
            </>
        )
}
export default Pagination;