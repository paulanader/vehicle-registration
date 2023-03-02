import { Form, InputGroup } from "react-bootstrap";

interface SearchProps {
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue, handleSearchChange }) => {
  return (
    <InputGroup data-testid="search-container">
      <Form.Control
        data-testid="search-input"
        className="border border-0 border-bottom shadow-none rounded-0"
        placeholder="Pesquisar por placa ou modelo"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </InputGroup>
  );
};

export default Search;
