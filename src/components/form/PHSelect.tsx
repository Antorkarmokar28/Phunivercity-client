import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TSPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disable?: boolean }[] | undefined;
  disabled?: boolean;
};
const PHSelect = ({ label, name, options, disabled }: TSPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            disabled={disabled}
            style={{ width: "100%" }}
            {...field}
            options={options}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
