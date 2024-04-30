import Labels from "../components/Labels"

const StyleGuide = () => {
  return (
    <div>
      Un guide des styles utilisés sur le site.

      <h1>H1 - 80px</h1>
      <h2>H2 - 48px</h2>
      <h3>H3 - 32px</h3>
      <h4>H4 - 24px</h4>
      <h5>H5 - 16px</h5>
      <h6>H6 - 14px</h6>

      <div className="caption">caption - 10px (all caps) - This was more of graphic element</div>
      {/* <div className="italic_caption">caption italic - 16px (handwritten)</div> */}

      <div className="tiny">Body Tiny - 12px</div>
      <div className="small">Body Small - 14px</div>
      <div>Body Default - 16px</div>
      <div className="medium">Body Medium - 18px</div>

      <div>Buttons - 24px</div>

      <a>Text Link - 14 px</a>
      <Labels>{["labels"]}</Labels>

      Colors
      
    </div>
  )
}

export default StyleGuide