import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const outfitState = atom({
	key: 'currentOutfit',
	default: {},
	effects_UNSTABLE: [persistAtom]
})

export default outfitState
