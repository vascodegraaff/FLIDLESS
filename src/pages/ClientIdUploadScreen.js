import * as React from 'react';
import { FilePicker } from '@apideck/file-picker'
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
	const handleSelect = (file) => {
		console.log(file)

		// Add some logic once file is uploaded we go to the next screen.
		// https://developers.apideck.com/get-started#step-2-enable-unified-apis-and-connectors
	}
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
				<Box as={'button'} bgColor={'green.400'} color={'white'} height={'xs'} width={'xs'} borderRadius={'full'} alignSelf={'center'} >
					<FilePicker
						onSelect={handleSelect}
						trigger={<button>Pick a file</button>}
						jwt="token-123"
						appId="QNhBNieHjoJAuTsjJkJkJU6c6Gup9Mf7AwU8JkJl"
						consumerId="your-consumer-id"
					/>

				</Box>
			</Stack>
		</Container>
	);
}

export default ClientIdUploadScreen;
