import React from 'react';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';

function AdminScannerScreen() {
	const [data, setData] = useState('No result');
	return (
		<>
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
			<p>{data}</p>
		</>
	);
}

export default AdminScannerScreen;
