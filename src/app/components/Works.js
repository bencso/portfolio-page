import IconButton from "./buttons/IconButton";

export default function Works() {
  return (
    <div className="works">
      <div className="works-pills">
        <div className="works-pills_pill" style={{ "--percent": `${50}%` }}>
          Web development
        </div>
        <div className="works-pills_pill" style={{ "--percent": "0%" }}>
          Web design
        </div>
        <div className="works-pills_pill" style={{ "--percent": "0%" }}>
          UI/UX design
        </div>
      </div>

      <div className="works-section">
        <div className="works-section_text">
          <div className="works-section_text_description">
            <h2>Web development</h2>
            <p>
              We craft unique, conversion-driven websites that help startups
              grow faster.
            </p>
          </div>
          <IconButton text="Who are you?" />
        </div>
        <div className="works-img" />
      </div>
    </div>
  );
}
