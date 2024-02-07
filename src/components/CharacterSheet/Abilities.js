function Abilities() {
  const abilities = [
    {
      ability: "Computer",
      value: 6
    },
    {
      ability: "Alertness",
      value: 4
    },
    {
      ability: "Insight",
      value: 5
    },
    {
      ability: "Investigation",
      value: 4
    },
    {
      ability: "Perception",
      value: 6
    },
    {
      ability: "Persuasion",
      value: 4
    }
  ]

  return (
    <div className="border border-dark rounded text-center p-3">
      {abilities.map(ability => (
        <div key={ability.ability}>
          <p>{ability.ability} - {ability.value}</p>
        </div>
      ))}    
    </div>
  )

}

export default Abilities