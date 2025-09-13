export default function Button({text, action}) {
  return <button onClick={action} className="button">{text}</button>;
}
