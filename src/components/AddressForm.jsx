import React from "react";

export const AddressForm = props => {
	const { findLatLong, setAddressSearch, addressSearch } = props;
	return (
		<form
			className="addressSearch"
			onSubmit={e => {
				e.preventDefault();
				findLatLong(addressSearch);
			}}
		>
			<input
				type="text"
				placeholder="Veuillez entrer votre adresse ou cliquer sur la carte pour entrer une nouvelle intervention."
				value={addressSearch}
				onChange={e => setAddressSearch(e.target.value)}
			/>
		</form>
	);
};
