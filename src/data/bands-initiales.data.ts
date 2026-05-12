import type { Band } from "../types"
import { creatioUuid } from "../utils/creatio-uuid"


const bandsInitiales = [
  {
    nomen: 'Metallica',
    numerusVotum: 28,
  },
  {
    nomen: 'Queen',
    numerusVotum: 22,
  },
  {
    nomen: 'Heroes del silencio',
    numerusVotum: 15,
  },
  {
    nomen: 'Bon Jovi',
    numerusVotum: 10,
  },
]

export const creareBandsInitiales = (): Band[] => {
  return bandsInitiales.map(band => ({ ...band, id: creatioUuid() }))
}