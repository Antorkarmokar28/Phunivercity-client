import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TSPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disable?: boolean }[];
};
const PHSelect = ({ label, name, options }: TSPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select style={{ width: "100%" }} {...field} options={options} />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
