import { creareBandsInitiales } from "../data/bands-initiales.data"
import type { Band } from "../types"


interface BandsState {
  bands: Band[]
}

export class BandsStore {

  private state: BandsState = {
    bands: creareBandsInitiales()
  }
  
  addereBand(band: Band) {
    this.state.bands.push(band)
  } 

  obtinereBands(): Band[] {
    return this.state.bands
  }

  delereBand(id: string): boolean {
    const longitudoInitialis = this.state.bands.length
    this.state.bands = this.state.bands.filter(band => band.id !== id)
    return this.state.bands.length < longitudoInitialis
  }

  addereVotumBand(id: string) {
    const band = this.state.bands.find(band => band.id === id)
    if (!band) return null
    band.numerusVotum += 1
    return band
  }
}