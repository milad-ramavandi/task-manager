import * as yup from "yup";

const useValidation = () => {
  const validation = yup.object({
    title: yup.string().required("Title is required"),
    category: yup.string().required("Category is required"),
    date: yup
      .string()
      .required("Date is required")
  });
  return validation;
};

export default useValidation;
