import "./TextField.css";
const TextField = ({ lable, value, onChange, type = "text" }) => {
  return (
    <div className="text-field">
      <label>{lable}</label>
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextField;
