import { Heading, HStack, Image,Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
  return (
  
    <VStack spacing="4">
     <Box bg='white' w='100%' p={4} borderRadius='md'>
        <Image src={imageSrc} alt={title} />
      < Heading color='black' size="md" textAlign="left">{title} </Heading>
      < Text color='black'>{description }</Text>
      < Text color='black' as='b'>See more
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Text>
     </Box>
    </VStack>

    );
};

export default Card;
