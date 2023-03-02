import { ButtonContainer, LinkButton } from "./styles";

interface PillButtonProps {
  label?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "submit" | "button";
  color?: "orange" | "blue";
  route?: string;
}

const PillButton: React.FC<PillButtonProps> = ({
  label,
  type = "submit",
  handleClick,
  color = "blue",
  route,
}) => {
  return (
    <>
      {route ? (
        <LinkButton
          data-testid={`pill-link-button-${color}`}
          to={route}
          className={`${color === "orange" ? "orangeButton" : "blueButton"}`}
        >
          {label}
        </LinkButton>
      ) : (
        <ButtonContainer
          data-testid={`pill-button-${color}`}
          type={type}
          onClick={handleClick}
          className={`${color === "orange" ? "orangeButton" : "blueButton"}`}
        >
          {label}
        </ButtonContainer>
      )}
    </>
  );
};

export default PillButton;
