import * as React from 'react';
import { useForm, useEffect } from 'react';
// import { FilePicker } from '@apideck/file-picker'
import '@apideck/file-picker/dist/styles.css'
import { Link } from 'react-router-dom';
import {
	Box,
	Container,
	Button,
	Text,
	Heading,
	Stack,
} from '@chakra-ui/react';


function ClientIdUploadScreen() {

	return (
		<Container maxW={'2xl'}>
			<Stack
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 36 }}>
				<Stack
					direction={'column'}
					spacing={3}
					align={'center'}
					alignSelf={'center'}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}>
						Please upload your <br />
						<Text as={'span'} color={'green.400'}>
							Identity file
						</Text>
					</Heading>
				</Stack>
					<Box as={'button'}
							 bgColor={'green.400'}
							 color={'white'}
							 height={'xs'}
							 width={'xs'}
							 borderRadius={'full'}
							 alignSelf={'center'}
							 type="file"
							 id="fileElem"
							 style={{display:'none'}}>
							 <label for="fileElem" fontWeight={1000}>Upload ID</label>


				</Box>
			</Stack>
		</Container>
	);
}

export default ClientIdUploadScreen;
