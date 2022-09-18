import React, { useEffect } from 'react';
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
	Flex,
	Spinner
} from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import AdminLoginScren from './AdminLoginScreen';
import axios from 'axios';


// function verifyQRCode(data) {

// 	// some kind of call to the blockchain/ backend to verify the smart contract from the QR code

// 	return (
// 		<Route exact path="/">
// 			{data ? < to="/admin" /> : <AdminScannerScreen />}
// 		</Route>

// 	);

// }

function AdminScannerScreen() {
	const [data, setData] = useState('No result');
	const [verified, setVerified] = useState(false);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	React.useEffect(() => {
		if (verified) {
			axios.get(`http://localhost:4000/verify_status`).then(res => {
				setLoading(false)
				navigate('/scanStatus', !!res.data.status);
			}).catch(err => console.warn(err))
		}
	}, [verified]);

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
							{ !loading ? <QrReader 
								onResult={(result, error) => {
									if (!!result) {
										setLoading(true)
										setData(result)
										setVerified(true)
									}
									
									if (!!error) {
										setLoading(false)
									}
								}}
								style={{ width: '100%' }}
							/> : <div style={{height: "100%", width:"100%"}}>
							<Center style={{ display: "flex", flexDirection: "column", height: "100%", width:"100%" }}>
								<Spinner size={'xl'}/>
								<br/>
								<Text color={'gray.500'} maxW={'3xl'} textAlign="center">
									{data.toString()}
								</Text>
							</Center>
							</div>}
						</Box>
					</Box>

				</Stack>
			</Center>
		</>
	);
}
export default AdminScannerScreen;
