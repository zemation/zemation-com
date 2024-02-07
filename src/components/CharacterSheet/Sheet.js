import Profile from './Profile'
import Details from './Details'
import Attributes from './Attributes'
import Abilities from './Abilities'
import Equipment from './Equipment'
import Contacts from './Contacts'
import Feats from './Feats'
import Flaws from './Flaws'

function Sheet() {
  return (
    <div className="container" id="sheet">
      <div className="row">
        <div className="col-lg-3">
          <Profile />
        </div>
        <div className="col">
          <Details />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <h3>Attributes</h3>
          <Attributes />
        </div>
        <div className="col-lg-2">
          <h3>Abilities</h3>
          <Abilities  />
        </div>
        <div className="col-lg-4">
          <h3>Equipment</h3>
          <Equipment />
        </div>
        <div className="col-lg-4">
          <h3>Contacts and Allies</h3>
          <Contacts />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <h3>Feats</h3>
          <Feats />
        </div>
        <div className="col-xl-6">
          <h3>Flaws</h3>
          <Flaws />
        </div>
      </div>
    </div>
    
  )
}

export default Sheet