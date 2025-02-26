import { z } from "zod";

export const createAcademicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a name" }),
  year: z.string({ required_error: "Please select a Year" }),
  startMonth: z.string({ required_error: "Please select a Start Month" }),
  endMonth: z.string({ required_error: "Please select a End Month" }),
});
