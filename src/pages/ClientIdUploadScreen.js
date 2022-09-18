import * as React from 'react';
import { useState } from 'react';
import '@apideck/file-picker/dist/styles.css';
import { Link } from 'react-router-dom';
import { useHistory, useNavigate } from 'react-router-dom';
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
import axios from 'axios'

function ClientIdUploadScreen() {
	const [file, setFile] = useState()
	const [loading, setLoading] = useState();
	const navigate = useNavigate();
	
	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	function processFile() {
		console.log(file);
		if(file!=null){
			const fileReader = new FileReader();
			fileReader.readAsText(file, "UTF-8");
			fileReader.onload = e => {
				console.log("e.target.result", e.target.result);
				callZkProof(e.target.result);
			};
		}
	}

	async function callZkProof(data) {
		setLoading(true)
		let inputsJson = JSON.parse(data);
		const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(inputsJson, 'indian-verifier-minimal.wasm', 'circuit_0.zkey')
		
		console.log(proof, publicSignals);
		
		axios.get(`http://localhost:4000/validate_proof`).then(res => {
			console.log(res.data);
			navigate('/qrCode', { data: "pedal" });
		}).catch(err => console.warn(err))
	}

	return (
		<Container maxW={'2xl'}>
			{loading ? <div style={{height: "100vh"}}>
			<Center style={{ height: "100%" }}>
				<Spinner size={'xl'}/>
			</Center>
			</div> :
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
