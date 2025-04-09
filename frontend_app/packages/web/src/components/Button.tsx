/*



*/

interface Props {
  children: string;
  color?: string; // add ? to make the prop optional
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
