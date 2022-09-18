import React, { useEffect, useState } from 'react';
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
} from '@chakra-ui/react';
import QRCode from "react-qr-code";


function ClientQrCodeScreen(props) {
	const [name, setName] = useState('NEO');
	const [flight, setFlight] = useState('MH370');
	const [seat, setSeat] = useState("28A");
	const [time, setTime] = useState("12:50 Sepetember 18");
	const [qrCode, setQrCode] = useState("hash-6b33981c0201d37f128cabe1b025fd6acef08576ebef77536d4faeb9e9d9b22d")
	console.log("test")
	console.log(props)
	useEffect(() => {

	}, [name]);
	return (
		<Center py={20}>
			<Box
				maxW={'445px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}>
				<Box
					h={'sm'}
					bg={'gray.100'}
					mt={-6}
					mb={6}
					pos={'relative'}>
					<div style={{ height: "auto", margin: "0 auto", maxWidth: "256", width: "100%" }}>
						<QRCode
							value={qrCode}
							size={256}
							style={{ height: "auto", maxWidth: "100%", width: "100%" }}
							viewBox={`0 0 256 256`}
						/>
					</div>
				</Box>
				<Stack borderRadius={'5rem'}>
					<Text
						color={'green.500'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}>
						Proof of indentity
					</Text>
					<Heading
						color={useColorModeValue('gray.700', 'white')}
						fontSize={'2xl'}
						fontFamily={'body'}>
						{name}
					</Heading>
					<Text color={'gray.600'}>
						Flight Number: {flight}, Seat Number: {seat}
					</Text>
					<Text style={{ fontSize: "0.6em"}} color={'gray.600'}>
						Address: {qrCode}
					</Text>
					<Text color={'gray.400'}>
						{time}
					</Text>
				</Stack>
			</Box>
		</Center>
	);
}

export default ClientQrCodeScreen;
