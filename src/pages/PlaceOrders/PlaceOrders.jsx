import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Title from "../../components/Global/Title/Title";
import CartTotal from "../../components/Cart/CartTotal/CartTotal";
import { assets } from "../../assets/frontend_assets/assets";

import { useNavigate } from "react-router-dom";
import { useAuthStore, useCheckOutStore } from "../../store";

export default function PlaceOrders() {
  const { formData, setFormData, method, setMethod, handlePlaceOrder } =
    useCheckOutStore();
  const { currentUser, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, "Invalid phone number")
      .required("Phone is required"),
  });

  const onSubmitOrder = async (values) => {
    // console.log("Submitting order with data:", values, "and method:", method);
    setFormData(values);
    const success = await handlePlaceOrder();
    if (success) {
      navigate("/orders");
    }
  };

  useEffect(() => {
    if (!method) {
      setMethod("cod");
    }
  }, [method, setMethod]);

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      const nameParts = currentUser.name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const email = currentUser.email || "";
      const phone = currentUser.phone || "";

      if (
        formData.firstName !== firstName ||
        formData.lastName !== lastName ||
        formData.email !== email ||
        formData.phone !== phone
      ) {
        const preFilledData = {
          ...formData,
          firstName,
          lastName,
          email,
          phone,
          street: formData.street || "",
          city: formData.city || "",
          state: formData.state || "",
          zipCode: formData.zipCode || "",
          country: formData.country || "",
        };
        setFormData(preFilledData);
      }
    }
  }, [currentUser, isAuthenticated]);

  return (
    <div className="container mx-auto py-10 px-4">
      <Formik
        initialValues={formData}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmitOrder}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
            {/* ------------------------- Left Side ------------------------ */}
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm">
              <Title text1="Delivery" text2="Information" className="mb-4" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <Field
                name="email"
                placeholder="Email Address"
                type="email"
                className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="error text-red-500 text-sm mt-1"
              />

              <Field
                name="street"
                placeholder="Street"
                className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="street"
                component="p"
                className="error text-red-500 text-sm mt-1"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Field
                    name="city"
                    placeholder="City"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="city"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="state"
                    placeholder="State"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="state"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Field
                    name="zipCode"
                    placeholder="Zip Code"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="country"
                    placeholder="Country"
                    className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="country"
                    component="p"
                    className="error text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <Field
                name="phone"
                placeholder="Phone"
                className="input border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="error text-red-500 text-sm mt-1"
              />
            </div>

            {/* ------------------------- Right Side ------------------------ */}
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm">
              <CartTotal />
              <div>
                <Title text1="Payment" text2="Method" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {[
                    {
                      id: "Stripe",
                      label: (
                        <img
                          className="h-8 mx-auto"
                          src={assets.stripe_logo}
                          alt="Stripe"
                        />
                      ),
                    },
                    {
                      id: "Razorpay",
                      label: (
                        <img
                          className="h-8 mx-auto"
                          src={assets.razorpay_logo}
                          alt="Razorpay"
                        />
                      ),
                    },
                    {
                      id: "cod",
                      label: (
                        <p className="text-gray-600 text-sm font-medium text-center">
                          Cash on Delivery
                        </p>
                      ),
                    },
                  ].map(({ id, label }) => (
                    <div
                      key={id}
                      onClick={() => setMethod(id)}
                      className={`flex flex-col items-center gap-2 border border-gray-300 p-4 rounded-lg cursor-pointer ${
                        method === id ? "bg-green-100 border-green-400" : ""
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border border-gray-300 rounded-full ${
                          method === id ? "bg-green-500" : ""
                        }`}
                      ></div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full text-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-12 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
