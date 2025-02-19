import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/AcademicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "/semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemeter: builder.mutation({
      query: (data) => ({
        url: "/semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemeterMutation } =
  academicManagementApi;
