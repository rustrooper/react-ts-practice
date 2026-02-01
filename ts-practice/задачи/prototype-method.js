Object.prototype.hash = function recHash(str) {
	let path = str.split('.')
	let curObj = this
	for (const key of path) {
		if (key in curObj && typeof curObj[key] === 'object') {
			curObj = curObj[key]
		} else {
			return curObj[key]
		}
	}
	return curObj
}

const obj = {
	person: {
		name: 'joe',
		history: {
			hometown: 'bratislava',
			bio: {
				funFact: 'I like fishing.',
			},
		},
	},
}

console.log(obj.hash('person.name')) // 'joe'
// obj.hash('person.history.bio') // {funFact: 'I like fishing.'}
console.log(obj.hash('person.history.bio'))
console.log(obj.hash('person.history.homeStreet'))
console.log(obj.hash('person.animal.pet.needNoseAtnEater'))
