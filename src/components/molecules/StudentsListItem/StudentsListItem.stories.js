import StudentsListItem from './StudentsListItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '100%',
    average: '5.0',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '2.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '75%',
    average: null,
  },
};
