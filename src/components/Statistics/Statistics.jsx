import PropTypes from 'prop-types';
import {
  StatSection,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage> {stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
