function Equipment() {
  const equipment = [
    {
      name: "Cloak of Wit",
      description: "Using humor as a shield against adversity."
    },
    {
      name: "Pen of Eloquence",
      description: "For persuasive skills that are articulated via written communication."
    },
    {
      name: "Book of Digital DNA",
      description: "Contains wisdom and learnings from past experiences."
    },
    {
      name: "Compass of Curiosity",
      description: "A tool used in navigating the internet super highway for finding new knowledge in a world of uncertainty."
    },
    {
      name: "Lantern of Hope",
      description: "Illuminates the path forward, especially during the darkest times, reminding you that not all is lost.  Sometimes it seems like the light is not as strong as other times."
    },
    {
      name: "Pendant of Equilibrium",
      description: "Aids in maintaining internal balance, symbolizing the management of chronic conditions."
    }
  ]
  return (
    <div className="border border-dark rounded p-3">
      {equipment.map(item => (
        <div key={item.name}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        </div>
      ))}

    </div>

  )
}

export default Equipment