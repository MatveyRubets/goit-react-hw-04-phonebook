import PropTypes from 'prop-types';

const Filter = ({ filter, searchFilter }) => {
  return (
    <div>
      <p>Search by Name</p>
      <input type="text" name="filter" value={filter} onChange={searchFilter} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  searchFilter: PropTypes.func.isRequired,
};

export default Filter;
