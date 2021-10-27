import React, { useEffect, useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.style';
import { useStudents } from 'hooks/useStudents';
import useModal from 'components/organisms/Modal/useModal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = (id) => {
    setCurrentStudent(id);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? <Modal handleClose={handleCloseModal}>{currentStudent}</Modal> : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
