import Button from "../buttons/Button";

export default function LetsCollabBlock({tab,setTab}){

  function onClick(){
    setTab("contact");
  }

    return (
      <div className="letscollab-block">
        <div className="letscollab-block_flex">
            <h2>Let’s collab!</h2>
            <p>If you would like to be part of a good collaboration</p>
        </div>
       {
        tab != "contact" &&  <Button action={onClick} text="Im sending you a message"/>
       }
      </div>
    )
}