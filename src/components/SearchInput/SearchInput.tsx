import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "store";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const onSearchGame = useGameQueryStore((store) => store.onSearchGame);
  const navigate = useNavigate();

  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearchGames = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };
  // handle submit
  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (searchRef.current) {
      const { value } = searchRef.current;
      onSearchGame(value);
    }
    navigate("/");
  };
  return (
    <form onSubmit={handleSearchSubmit} style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search the games"
          borderRadius="2rem"
          variant="filled"
          value={query}
          onChange={handleSearchGames}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
