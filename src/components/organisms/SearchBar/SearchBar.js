import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchResults, SearchWrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudent, setMatchingStudent] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (done) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudent(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="search" id="search" />
        {searchPhrase && matchingStudent.length ? (
          <SearchResults>
            {matchingStudent.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
