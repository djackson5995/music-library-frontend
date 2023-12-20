import "./TextField.css";
const TextField = ({ lable, value, onChange, type = "text" }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{lable}</label>
      <input
        className="form-control"
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextField;
