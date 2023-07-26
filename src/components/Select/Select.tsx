const Select = ({ name, list }: { name: string; list: string[] }) => {
  return (
    <select data-test-id="filter-duration" name="duration">
      <option value="">duration</option>
      <option value="0_x_5">&lt; 5 days</option>
      <option value="5_x_10">&lt; 10 days</option>
      <option value="10_x">&ge; 10 days</option>
    </select>
  );
};

export default Select;
