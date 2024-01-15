import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

const backColors = ['grey', 'green', 'grey', 'green', 'grey'];

function Statistics({ title = 'Statistics', stats }) {
  let [docxStats, mp3Stats, pdfStats, psdStats, mp4Stats] = stats;
  return (
    <StatisticsSection className="statistics">
      <Title className="title">{title}</Title>

      <StatList className="stat-list">
        <StatItem className="item" style={{ backgroundColor: backColors[0] }}>
          <Label className="label">{docxStats.label} </Label>
          <Percentage className="percentage">
            {docxStats.percentage}%
          </Percentage>
        </StatItem>
        <StatItem className="item" style={{ backgroundColor: backColors[1] }}>
          <Label className="label">{mp3Stats.label} </Label>
          <Percentage className="percentage">{mp3Stats.percentage}%</Percentage>
        </StatItem>
        <StatItem className="item" style={{ backgroundColor: backColors[2] }}>
          <Label className="label">{pdfStats.label} </Label>
          <Percentage className="percentage">{pdfStats.percentage}%</Percentage>
        </StatItem>
        <StatItem className="item" style={{ backgroundColor: backColors[3] }}>
          <Label className="label">{psdStats.label} </Label>
          <Percentage className="percentage">{psdStats.percentage}%</Percentage>
        </StatItem>
        <StatItem className="item" style={{ backgroundColor: backColors[4] }}>
          <Label className="label">{mp4Stats.label} </Label>
          <Percentage className="percentage">{mp4Stats.percentage}%</Percentage>
        </StatItem>
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
