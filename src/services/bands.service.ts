import type { Band } from "../types"
import { BandsStore } from "../store/bands.store"
import { creatioUuid } from "../utils/creatio-uuid"


class BandsService {

  private readonly bandsStore: BandsStore

  constructor() {
    this.bandsStore = new BandsStore()
  }
  
  obtinereBands(): Band[] {
    return this.bandsStore.obtinereBands()
  }
  addereBand(nomen: string) {
    const novumBand: Band = { 
      id: creatioUuid(),
      nomen,
      numerusVotum: 0
     }
     
    this.bandsStore.addereBand(novumBand)
    return novumBand
  }
  delereBand(id: string): boolean {
    return this.bandsStore.delereBand(id)
  }
  addereVotumBand(id: string): Band | null {
    return this.bandsStore.addereVotumBand(id)
  }
}

export const bandsService = new BandsService()