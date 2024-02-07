function Flaws() {
  const flaws = [
    {
      name: "Overthinking",
      description: "Sometimes caught in analysis paralysis, like a wizard pondering over spells while the battle rages on."
    },
    {
      name: "Impatience",
      description: "You hate sitting stagnant in any given situation."
    },
    {
      name: "Trust Issues",
      description: "Slow to open up and rely on others, guarding your secrets as a dragon guards its hoard."
    },
    {
      name: "Autism",
      description: "Your unique perspective can be a strength, but it comes with the risk of burnout from constant adaptation and effort to fit into a world not designed for you."
    },
    {
      name: "Depression",
      description: "Like walking through a swamp, this condition can slow your journey and cloud your vision, making even the simple tasks feel insurmountable."
    },
    {
      name: "Anxiety",
      description: "A spectral foe that often ambushes you, casting a shadow of doubbt over your decisions and path forward."
    },
    {
      name: "ADHD",
      description: "This trait grants you mental agility of a rogue in change focus quicky, but it can also scatter your energies, making sustained attention a Herculean task."
    },
    {
      name: "PTSD",
      description: "Past battles have left invisible scars that can unexpectedly influence your reactions and choices, like a hidden trap that springs in the quietest moments."
    },
    {
      name: "Hypothyroidism",
      description: "Like carrying an invisible weight, this condition saps energy and clouds your mental agility, making every quest feel uphill."
    },
    {
      name: "High Blood Pressure",
      description: "A silent storm brewing within, threatening to erupt at moments of stress and challenge, demanding constant vigilance."
    },
    {
      name: "Type 2 Diabetes",
      description: "A meticulous alchemist required to balance the internal potions of the body, turning daily sustenance into a complex ritual of management."
    }
  ]
  return (
    <div className="border border-dark rounded">
    {flaws.map(flaw => (
      <div key={flaw.name}>
        <h3>{flaw.name}</h3>
        <p>{flaw.description}</p>
      </div>
    ))}    
    
    </div>
  )

}


export default Flaws