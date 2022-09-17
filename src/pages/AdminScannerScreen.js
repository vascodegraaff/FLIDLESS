import React from 'react';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	Center,
	Image,
	createIcon,
} from '@chakra-ui/react';
function AdminScannerScreen() {
	const [data, setData] = useState('No result');
	const IMAGE =
		'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

	return (
		<>
			<Center py={12}>
				<Stack>
				<Heading
				textAlign="center"
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						bgGradient="linear(to-r, green.200, green.500, purple.600)"
						bgClip={'text'}
						lineHeight={'110%'}>
						Scan QR Code
					</Heading>
					<Text color={'gray.500'} maxW={'3xl'} textAlign="center">
						Scan the QR code to check the status of the client
					</Text>
				<Box
					role={'group'}
					w={'xl'}
					bg={useColorModeValue('white', 'gray.800')}
					boxShadow={'2xl'}
					rounded={'lg'}
					pos={'relative'}
					zIndex={1}
				>
					<Box
						rounded={'lg'}
						height={'xl'}
						borderRadius={'lg'}
					>
						<QrReader
							onResult={(result, error) => {
								if (!!result) {
									setData(result?.text);
								}

								if (!!error) {
									console.info(error);
								}
							}}
							style={{ width: '100%' }}
						/>
					</Box>
				</Box>
			</Stack>
			</Center>
			<p>{data}</p>
		</>
	);
}

export default AdminScannerScreen;
