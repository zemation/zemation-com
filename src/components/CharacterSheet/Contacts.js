function Contacts() {
  const contacts = [
    {
      name: "The Healer",
      description: "A trusted figure aiding in managing health conditions with wisdom and care."
    },
    {
      name: "The Sage",
      description: "A mentor offering guidance on navigating life's challenges with these conditions."
    }
  ]

  return (
    <div className="border border-dark rounded">
      {contacts.map(contact => (
        <div key={contact.name}>
        <h4>{contact.name}</h4>
        <p>{contact.description}</p>
        </div>
      ))}
    </div>
  )

}


export default Contacts