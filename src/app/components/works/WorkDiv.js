import IconButton from "../buttons/IconButton";

//TODO: késöbb context-be tenni a sectiont :)
export default function WorkDiv({name,description,img, cta,setSection}){
    return (
         <div className="works-section">
        <div className="works-section_text">
          <div className="works-section_text_description">
            <h2>{name}</h2>
            <p>
              {description}
            </p>
          </div>
          <IconButton text={cta} action={()=>setSection(name.toLowerCase())}/>
        </div>
        <div className="works-img" style={{"--img-url" : `url(${img})`}}/>
      </div>
    )
}