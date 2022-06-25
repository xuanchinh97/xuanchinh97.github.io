import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#326f39',
    grade3: '#4ca14f',
    grade2: '#5fc563',
    grade1: '#9be9a8',
    grade0: '#ebedf0',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="xuanchinh97"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
