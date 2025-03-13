import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useEffect, useRef, useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <InputGroup startElement={<LuSearch />}>
      <Input
        flex="1"
        placeholder="Search"
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        color="black"
      />
    </InputGroup>
  );
}

export default SearchInput;
