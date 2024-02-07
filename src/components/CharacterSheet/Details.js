function Details() {
  const CharDetails = [
    {
      name: "Class and Level",
      detail: "Digital Geek - 43"
    },
    {
      name: "Height",
      detail: "6 feet 3 inches"
    },
    {
      name: "Weight",
      detail: "230 pounds"
    },
    {
      name: "Eyes",
      detail: "0xDEADDEAD"
    },
    {
      name: "Skin",
      detail: "White"
    },
    {
      name: "Hair",
      detail: "Brown"
    }
  ]

  return (
    <div className="container h-100 d-flex align-items-center justify-content-around">
      <div className="row mt-5">
      {CharDetails.map(detail => (
        <div key={detail.name} className="col-lg-4">
          <p>{detail.detail}</p>
          <p className="border-top border-dark">{detail.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Details