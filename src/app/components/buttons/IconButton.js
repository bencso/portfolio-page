import { AiOutlineRight } from "react-icons/ai";

export default function IconButton({text, action}) {
  return  <button className="button button-icon" onClick={action}>
            {text}
            <div className="button_icon">
              <AiOutlineRight />
            </div>
          </button>;
}
