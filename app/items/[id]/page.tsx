const ItemDesc = async ({ params }: { params: { id: string } }) => {
	// fetch item details
	const res = await fetch(process.env.SITE_URL + '/api/details/', {
		method: 'POST',
		body: JSON.stringify({ id: params.id }),
	})
	const details = await res.json()

	// show item details
	return (
		<div>
			<pre>{JSON.stringify(details, null, 4)}</pre>
		</div>
	)
}

export default ItemDesc
