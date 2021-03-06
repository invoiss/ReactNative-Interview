export default [ ...Array( 10 ).keys() ].map(
	( header, index ) => ( {
		title:      `Header ${ header }`,
		index,
		navOffset:  0,
		bodyOffset: 0,
		data:       [ ...Array( Math.floor( Math.random() * 4 ) + 2 ).keys() ].map(
			( item ) => `Header ${ header }, Item ${ item }` )
	} ) );
