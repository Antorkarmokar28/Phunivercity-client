export type TStudent = {
  _id: string;
  id: string;
  user: any;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
    _id: string;
  };
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    _id: string;
  };
  localGuardian: {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
    _id: string;
  };
  profileImage: string;
  admissionSemester: {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  isDeleted: boolean;
  academicDepartment: {
    _id: string;
    name: string;
    academicFaculty: {
      _id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  fullname: string;
};
