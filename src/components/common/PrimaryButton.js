const PrimaryButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-full bg-blue py-2 rounded-lg text-white text-[16px] font-semibold"
  >
    {label}
  </button>
);

export default PrimaryButton;
