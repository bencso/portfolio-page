import IconButton from "../buttons/IconButton";

export default function WorkDiv({name,description,img, cta}){
    return (
         <div className="works-section">
        <div className="works-section_text">
          <div className="works-section_text_description">
            <h2>{name}</h2>
            <p>
              {description}
            </p>
          </div>
          <IconButton text={cta} />
        </div>
        <div className="works-img" style={{"--img-url" : `url(${img})`}} />
      </div>
    )
}