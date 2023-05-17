import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function FormikSample() {
  const addProductValidationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name required!"),
    contactTitle: Yup.string().required("Contact Title required"),
    country: Yup.string().required("Country Name required"),
    contactName: Yup.string().required("Contact Name required"),
    city: Yup.string().required("City Name required"),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactTitle: "",
      country: "",
      contactName: "",
      city:"",
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      console.log(values);

      axios
        .post("https://northwind.vercel.app/api/products", values)
        .then((response) => {
          console.log(response);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
                <p style={{ color: "red" }}>{formik.errors?.companyName}</p>
              </div>
              <div>
                <label htmlFor="contactTitle">Contact Title</label>
                <input
                  id="contactTitle"
                  name="contactTitle"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.contactTitle}
                />
                <p style={{ color: "red" }}>{formik.errors?.contactTitle}</p>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
                 <p style={{ color: "red" }}>{formik.errors?.country}</p>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="contactName">Contact Name</label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.contactName}
                />
                 <p style={{ color: "red" }}>{formik.errors?.contactName}</p>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                 <p style={{ color: "red" }}>{formik.errors?.city}</p>
              </div>
              <div>
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </>
      </form>
    </>
  );
}

export default FormikSample;
