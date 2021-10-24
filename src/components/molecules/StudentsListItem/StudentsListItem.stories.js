import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const mockedData = {
  name: 'Adam Romański',
  attendance: '55%',
  average: '3.5',
};

const Template = (args) => <StudentsListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: mockedData,
};
