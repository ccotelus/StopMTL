import React from "react";

export const AddressForm = props => {
	const {
		findLatLong,
		setAddressSearch,
		addressSearch,
		addressList,
		setAddressList,
		setAddressListBuffer
	} = props;

	const autoComplete = address => {
		setAddressListBuffer(prev => ({ ...prev, found: true }));
		findLatLong(address);
		setAddressSearch(address);
		setAddressList([]);
	};
	return (
		<form
			className="addressSearch"
			onSubmit={e => {
				e.preventDefault();
				findLatLong(addressSearch);
			}}
		>
			{addressList.length > 0 && (
				<ul>
					{addressList.map((address, index) => (
						<li key={index} onClick={() => autoComplete(address.address)}>
							{address.address}
						</li>
					))}
				</ul>
			)}
			<input
				type="text"
				placeholder="Veuillez entrer votre adresse ou cliquer sur la carte pour entrer une nouvelle intervention."
				value={addressSearch}
				onChange={e => setAddressSearch(e.target.value)}
			/>
		</form>
	);
};
