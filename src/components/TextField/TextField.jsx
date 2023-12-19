import "./TextField.css";
const TextField = ({ lable, value, onChange }) => {
  return (
    <div className="text-field">
      <label>{lable}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextField;
