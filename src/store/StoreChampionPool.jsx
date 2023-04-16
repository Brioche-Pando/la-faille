import { createContext, useContext, useState } from 'react'

const ChampionContext = createContext()

export const useChampionStore = () => {
  const [champions, setChampions] = useState([])

  const handleMoveChampion = (championSlug, targetTier) => {
    const champion = champions.find(champion => champion.slug === championSlug)

    // Si le champion est déjà dans le tier cible, ne rien faire
    if (champion && champion.tier === targetTier) {
      return
    }

    // Si le champion n'est pas dans la liste, ajouter le champion au tier cible
    if (!champion) {
      const newChampion = {
        slug: championSlug,
        tier: targetTier
      }
      setChampions([...champions, newChampion])
    } else {
      // Sinon, mettre à jour le tier du champion
      const updatedChampions = champions.map(c =>
        c.slug === champion.slug ? { ...c, tier: targetTier } : c
      )
      setChampions(updatedChampions)
    }
  }

  return { champions, handleMoveChampion }
}

export function ChampionStoreProvider ({ children }) {
  const championStore = useChampionStore()
  return (
    <ChampionContext.Provider value={championStore}>
      {children}
    </ChampionContext.Provider>
  )
}

export function useChampionContext () {
  return useContext(ChampionContext)
}
