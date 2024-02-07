function Feats() {
  const feats = [
    {
      name: "Boundless Curiosity",
      description: "Your thirst for knowledge is insatiable. Like a scholar uncovering ancient secrets, you pursue udnerstanding and insight, driving you to explore, ask, and learn continuously."
    },
    {
      name: "Steadfast Loyalty",
      description: "Once you commit to a person or cause your loyalty is unwavering. Friends and allies value this trait highly, knowing you stand with them like a steadfast guardian."
    },
    {
      name: "Humor in Adversity",
      description: "Your sense of humor, sharp and ever-present, cuts through tension and lightens even the heaviest moments. It's a social glue and a personal salve, reminding you and others not to take life too seriously."
    },
    {
      name: "Reflective Insight",
      description: "You possess a deep capacity for self-reflection, allowing you to learn from experiences and grow. This introspection is a wellspring of wisdom, but can sometimes affect the (Overthinking) flaw."
    }
  ]

  return (
    <div className="border border-dark rounded">
    {feats.map(feat => (
      <div key={feat.name}>
      <h3>{feat.name}</h3>
      <p>{feat.description}</p>
      </div>
    ))}    
    
    </div>
  )
}

export default Feats