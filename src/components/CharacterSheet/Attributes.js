function Attributes() {

  const attributes = [
    {
      stat: "Strength",
      value: 10
    },
    {
      stat: "Dexterity",
      value: 10
    },
    {
      stat: "Constitution",
      value: 10
    },
    {
      stat: "Wisdom",
      value: 15
    },
    {
      stat: "Intelligence",
      value: 12
    },
    {
      stat: "Charisma",
      value: 11
    }

  ]

  return (
    <>
    {attributes.map(attribute => (
      <div key={attribute.stat} className="border border-dark mb-1 rounded text-center p-1">
        <p>{attribute.stat}</p>
        <p>{attribute.value}</p>
      </div>
    ))}
    
    </>
  )
}


export default Attributes