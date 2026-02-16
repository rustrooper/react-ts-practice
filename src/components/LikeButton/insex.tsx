import {useState} from 'react'

export function LikeButton() {
	const [likes, setLikes] = useState<number>(0)

	const handleLike = () => {
		setTimeout(() => {
			setLikes(prev => prev + 1)
		}, 300)
	}

	return <button onClick={handleLike}>{likes}</button>
}
