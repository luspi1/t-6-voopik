import { tracks } from '../mockData/tracks.mjs'

export const getAllTracks = (req, res) => {
	res.status(200).json(tracks)
}
