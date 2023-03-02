import { BiArrowBack } from "react-icons/bi";
import { ArrowLink, ItemsLink, Title } from "./styles";

type BreadCrumbItemsType = {
  route: string;
  label: string;
};

interface BreadCrumbProps {
  route?: string;
  items?: BreadCrumbItemsType[];
  title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ route, items, title }) => {
  return (
    <div
      className="d-flex align-items-center mt-3 mb-4"
      data-testid="breadcrumb-container"
    >
      {route && (
        <ArrowLink to={route} data-testid="arrow-back-icon">
          <BiArrowBack size={22} color="#000" />
        </ArrowLink>
      )}
      <div>
        {route && (
          <ItemsLink to="/" data-testid="first-item-link">
            Início
          </ItemsLink>
        )}
        {items &&
          items.map((item) => (
            <ItemsLink
              key={item.label}
              to={item.route}
              data-testid={`item-link-${item.label}`}
            >
              | {item.label}
            </ItemsLink>
          ))}
        <Title className="text-dark">{title}</Title>
      </div>
    </div>
  );
};

export default BreadCrumb;
