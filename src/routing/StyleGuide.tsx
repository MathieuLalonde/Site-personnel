import Labels from "../components/Labels"

const StyleGuide = () => {
  return (
    <div className="container">

      <h1>Styleguide.</h1>
      Un guide des styles utilisés sur le site :

      <h1>H1 Header</h1>
      <h2>H2 Header</h2>
      <h3>H3 Header</h3>
      <h4>H4 Header</h4>
      <h5>H5 Header</h5>
      <h6>H6 Header</h6>

      <div className="caption">caption - 10px (all caps) - This was more of graphic element</div>
      {/* <div className="italic_caption">caption italic - 16px (handwritten)</div> */}

      <div className="tiny">Body Tiny - 12px</div>
      <div className="small">Body Small - 14px</div>
      <div>Body Default - 16px</div>
      {/* <div className="medium">Body Medium - 18px</div>

      <div>Buttons - 24px</div> */}

      <a>Text Link</a>
      <Labels>{["labels"]}</Labels>

      {/* Colors */}
      
    </div>
  )
}

export default StyleGuide