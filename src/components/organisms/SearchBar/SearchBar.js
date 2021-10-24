import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchBarWrapper, StatusInfo, SearchResults, SearchWrapper, SearchResultItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';

const SearchBar = () => {
  const [matchingStudent, setMatchingStudent] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudent(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudent,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="search" id="search" />
        <SearchResults isVisible={isOpen && matchingStudent.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudent.map((item, index) => (
              <SearchResultItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
