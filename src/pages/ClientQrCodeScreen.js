import React from 'react';
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


function ClientQrCodeScreen() {
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
							value="test"
							size={256}
							style={{ height: "auto", maxWidth: "100%", width: "100%" }}
							viewBox={`0 0 256 256`}
						/>
					</div>
					{/* <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          /> */}
				</Box>
				<Stack borderRadius={'5rem'}>
					<Text
						color={'green.500'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}>
						Blog
					</Text>
					<Heading
						color={useColorModeValue('gray.700', 'white')}
						fontSize={'2xl'}
						fontFamily={'body'}>
					Your Identity Token
					</Heading>
					<Text color={'gray.500'}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum.
					</Text>
				</Stack>
			</Box>
		</Center>
	);
}

export default ClientQrCodeScreen;
