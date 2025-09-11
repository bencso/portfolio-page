import { AiOutlineRight } from "react-icons/ai";

export default function IconButton({text}) {
  return  <button className="button button-icon">
            {text}
            <div className="button_icon">
              <AiOutlineRight />
            </div>
          </button>;
}
