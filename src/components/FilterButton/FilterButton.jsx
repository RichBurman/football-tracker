function FilterButton({
  label,
  selectedPosition,
  setSelectedPosition,
}) {
  return (
    <button
      className={
        selectedPosition === label
          ? "active-filter"
          : ""
      }
      onClick={() => setSelectedPosition(label)}
    >
      {label}
    </button>
  );
}

export default FilterButton;