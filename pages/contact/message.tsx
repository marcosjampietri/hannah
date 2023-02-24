import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { animated, useTransition, config } from "react-spring";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

import { registerUser, loginUser, selectUsers } from "../../store/usersSlicer";
import { AppDispatch } from "../../store/index";
import { useTypedSelector } from "../../store/index";
import { useEffect } from "react";

import { selectload, setComplete, setLoading } from "../../store/loadSlicer";
import axios from "axios";
import Loader from "@/components/Loader";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms?: boolean;
};

const FormComponent = ({ reg }: any) => {
  const dispatch: AppDispatch = useDispatch();

  const { complete, loading } = useTypedSelector(selectload);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required, Mr. X 🤪")
      .min(3, "name must be at least 3 characters long 😒"),
    email: Yup.string()
      .required("Email is required 😅")
      .email("Email is invalid 🧐"),
    phone: Yup.string(),
    // phone: Yup.string().required("Phone is required 😅"),
    message: Yup.string()
      .required("What do you want to ask me? 😅")
      .min(20, "message must be at least 20 characters long 😒"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Hey! you need to accept the terms to register 😁"
    ),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  const errorsExist = Object.keys(errors).length !== 0;

  const submitHandler: SubmitHandler<Inputs> = async (userData) => {
    try {
      dispatch(setLoading(true));
      const { name, email, phone, message } = userData;

      await axios.post("/api/klavyio/subscribe", {
        list_id: "TVhB7F",
        name,
        email,
        phone_number: phone,
        message,
      });
      // await axios.post("/api/klavyio/getprofile", {
      //   list_id: "TVhB7F",
      //   name,
      //   email,
      //   phone_number: phone,
      //   message,
      // });

      dispatch(setLoading(false));
      dispatch(setComplete(true));
    } catch (err) {
      alert("something wrong is not right");
    }
  };

  const animStyles = {
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 20px, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    delay: 0,
  };

  const errTransNm = useTransition(errors.name, animStyles);
  const errTransEm = useTransition(errors.email, animStyles);
  const errTransPh = useTransition(errors.phone, animStyles);
  const errTransMss = useTransition(errors.message, animStyles);
  const errTransAcp = useTransition(errors.acceptTerms, animStyles);

  if (loading)
    return (
      <Form
        style={{
          display: "grid",
          placeItems: "center",
          background: "hsla(0, 0%, 0%, 0.1)",
          height: "650px",
          borderRadius: "10px",
        }}
      >
        <Loader />
      </Form>
    );

  return (
    <Form noValidate onSubmit={handleSubmit(submitHandler)}>
      {!complete ? (
        <>
          <div>SEND A MESSAGE</div>
          <Field>
            <Label>NAME</Label>
            <MdAccountCircle />
            <Input
              {...register("name")}
              type="name"
              placeholder="John Doe"
              defaultValue=""
              className={`${errors.name ? "invalid" : ""}`}
            />
            {errTransNm((styles, errname) =>
              errname ? <Warn style={styles}>{errname?.message}</Warn> : null
            )}
          </Field>
          <Field>
            <Label>E-MAIL</Label>
            <MdEmail />
            <Input
              {...register("email")}
              type="email"
              placeholder="email@gmail.com"
              defaultValue="@gmail.com"
              className={`${errors.email ? "invalid" : ""}`}
            />
            {errTransEm((styles, erremail) =>
              erremail ? <Warn style={styles}>{erremail?.message}</Warn> : null
            )}
          </Field>
          <Field>
            <Label>PHONE NUMBER</Label>
            <AiFillPhone />
            <Input
              {...register("phone")}
              type="tel"
              placeholder="XXXXXX"
              defaultValue="+44"
              className={`${errors.phone ? "invalid" : ""}`}
            />
            {errTransPh((styles, errPhone) =>
              errPhone ? <Warn style={styles}>{errPhone?.message}</Warn> : null
            )}
          </Field>
          <Field style={{ height: "200px" }}>
            <Label>YOUR MESSAGE</Label>
            <Input
              {...register("message")}
              type="text"
              placeholder="Your Message"
              defaultValue=""
              className={`${errors.message ? "invalid" : ""}`}
            />
            {errTransMss((styles, erreMss) =>
              erreMss ? <Warn style={styles}>{erreMss?.message}</Warn> : null
            )}
          </Field>
          <label htmlFor="acceptTerms">
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <input
                {...register("acceptTerms")}
                type="checkbox"
                id="acceptTerms"
                className={`${errors.acceptTerms ? "invalid" : ""}`}
              />
              <div style={{ margin: "0px 20px" }}>
                Accept Terms & Conditions
              </div>
              {errTransAcp((styles, erracpt) =>
                erracpt ? <Warn style={styles}>{erracpt?.message}</Warn> : null
              )}
            </div>
          </label>
          <Submit type="submit" className={`${errorsExist ? "disabled" : ""}`}>
            SUBMIT
          </Submit>{" "}
        </>
      ) : (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "650px",
          }}
        >
          Message sent succesfully
        </div>
      )}
    </Form>
  );
};

export default FormComponent;

export const Form = styled.form`
  width: 100%;
  /* max-width: 600px; */
  height: 100%;
  padding: 0px 10px;
  flex: 1 1 400px;

  margin: 10px;

  font-family: Montserrat;
  font-size: 16px;

  .disabled {
    transition: 1s;
    background-color: hsla(35, 0%, 53%, 1);
    color: hsla(0, 0%, 40%, 1);
  }
`;

export const Field = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  margin: 25px auto;

  border-radius: 5px;
  /* background-color: hsla(35, 15%, 100%, 1); */
  box-shadow: 2px 2px 10px hsla(35, 35%, 0%, 0.1);

  svg {
    position: absolute;
    bottom: 5px;
    left: 8px;
    font-size: 20px;
    fill: hsla(35, 35%, 35%, 1);
  }

  .invalid {
    transition: 0.3s;
    border: 2px solid hsla(0, 100%, 50%, 0.7);
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0px 37px;
  padding-top: 20px;
  font-size: 16px;

  border-radius: 5px;
  border: none;
  background-color: hsla(35, 35%, 85%, 0);
  color: hsla(0, 0%, 10%, 0.8);

  transition: 0.5s;

  ::placeholder {
    transition: 0.3s;
    color: hsla(240, 10%, 50%, 0.3);
    font-size: 16px;
    font-weight: 100;
  }

  :focus {
    transition: 0.3s;
    // padding: 0px 60px;
    padding-top: 4px;
    padding-left: calc(35px + 5vw);

    outline: none;
    background: hsla(35, 30%, 100%, 0);
    border: 2px solid hsla(35, 35%, 35%, 1);
    /* mix-blend-mode: hard-light; */
    color: hsla(35, 35%, 35%, 1);
    ::placeholder {
      color: hsla(35, 35%, 35%, 0.3);
    }
  }

  // :-webkit-autofill {
  //     transition: 0.3s;
  //     background: hsla(0, 100%, 60%, 1);
  // }
`;

export const Label = styled.label`
  position: absolute;
  top: 5px;
  left: 10px;

  color: hsla(35, 15%, 35%, 1);

  font-size: 14px;
`;

export const Submit = styled.button`
  display: block;
  width: 100%;
  max-width: 500px;
  height: 50px;
  margin: 20px auto;

  transition: 1s;
  border-radius: 5px;
  background-color: hsla(35, 35%, 35%, 1);
  border: none;
  color: hsla(0, 0%, 100%, 1);
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const Warn = styled(animated.span)`
  position: absolute;
  bottom: 0px;
  left: 2.5%;
  transform: translate(-50%, 110%);
  width: 95%;

  padding: 2px;
  z-index: 2;
  font-size: 16px;
  font-family: Montserrat;
  text-align: center;

  // border: 1px solid hsla(360, 100%, 100%, 1);
  background: hsla(0, 80%, 57%, 1);
  border-radius: 5px;
  color: hsla(360, 100%, 100%, 1);
`;

const shake = keyframes` 
    0% { transform: translate(25px, 0px) ; }
  10% { transform: translate(-12px, -0px) ; }
  20% { transform: translate(8px, 0px) ; }
  30% { transform: translate(-5px, 0px) ; }
  40% { transform: translate(3px, -0px) ; }
  50% { transform: translate(-2px, 0px) ; }
  60% { transform: translate(1px, 0px) ; }
  70% { transform: translate(0px, 0px) ; }
  80% { transform: translate(0px, -0px) ; }
  90% { transform: translate(0px, 0px) ; }
  100% { transform: translate(0px, -0px) ; } 
`;

export const Err = styled.div`
  position: absolute;
  margin: 0px;
  bottom: -22px;

  h6 {
    border-radius: 3px;
    padding: 4px 50px;
    margin: 0px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: initial;
    font-size: 10px;
    background: red;
    color: white;
  }

  animation: ${shake} 0.82s cubic-bezier(0, 1, 0.7, 1);
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
`;
const ErrorWrap = styled(animated.div)`
  position: relative;
`;
