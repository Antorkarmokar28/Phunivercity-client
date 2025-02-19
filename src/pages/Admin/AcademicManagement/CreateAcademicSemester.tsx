import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import PHForm from "../../../components/form/PHForm";
import { monthOptions } from "../../../constants/Global";
import { semesterOptions } from "../../../constants/Semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicSemesterSchema } from "../../../schemas/AcademicManagement.Schema";
import { useAddAcademicSemeterMutation } from "../../../redux/features/admin/AcademincManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemeterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
        console.log(res);
      } else {
        toast.success("Academic Semester created is Successfully", {
          id: toastId,
        });
      }
    } catch (err) {
      toast.error("Something went worng!", { id: toastId });
      console.log(err);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span="6">
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(createAcademicSemesterSchema)}
        >
          <PHSelect label="Name" name="name" options={semesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
