import { NextResponse } from 'next/server'

export const GET = async (query = 'mouse') => {
	const res = await fetch(`${process.env.MELI_SEARCH_URL}${query}`)
	const data = await res.json()
	return NextResponse.json(data)
}
