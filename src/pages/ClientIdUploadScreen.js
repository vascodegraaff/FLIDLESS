import * as React from 'react';
import { useState } from 'react';
import '@apideck/file-picker/dist/styles.css'
import { Link } from 'react-router-dom';
import {
	Box,
	Container,
	Button,
	Text,
	Heading,
	Stack,
	HStack,
	Input,
	FormControl,
	Center,
	Spinner,
} from '@chakra-ui/react';

function ClientIdUploadScreen() {
	const [file, setFile] = useState()
	const [loading, setLoading] = useState();
	const [fileContent, setFileContent] = useState('');

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	function processFile() {
		console.log(file);
		if(file!=null){
			// setLoading(true);
			const fileReader = new FileReader();
			fileReader.readAsText(file, "UTF-8");
			fileReader.onload = e => {
				console.log("e.target.result", e.target.result);
				setFileContent(e.target.result);
			};
		}
	}

	async function callZkProof() {

	}



	return (
		<Container maxW={'2xl'}>
			{loading ? <>
			<Center>
				<Spinner size={'xl'}/>
			</Center>
			</> :
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
					<FormControl >
						<HStack>
							<Input type={'file'} accept='.json' onChange={handleChange} w={'xs'} />
							<Button type={'submit'} onClick={() => processFile()}>Upload</Button>
						</HStack>
					</FormControl>

				</Stack>}
		</Container>
	);
}

export default ClientIdUploadScreen;
