import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import axios from "axios";

export default function EditEmerContact({ setEditable, onEdit }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.emerName,
      telf: user.emerTelf,
      mail: user.emerMail,
    },
  });

  const saveEdits = async (data) => {
    try {
      console.log(register);
      // debugger
      const response = await axios.put(
        `http://localhost:3000/users/${user._id}`,
        data
      );
      // localStorage.removeItem('userInfo');
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      setEditable(false);
      onEdit();
    } catch (error) {
      console.error("There was an error updating the user!", error);
    }
  };
  return (
    <>
      <section className="profile container" id="profile">
        <header className="header">
          <button
            onClick={() => {
              setEditable(false);
            }}
            className=""
          >
            <span className="material-symbols-rounded icon link">close</span>
          </button>
        </header>
        <section className="e-contact container" id="e_contact">
          <div className="e-contact_info">
            <h2 className="h1 danger e-contact_head mg-b-20">
              Emergency contact:
            </h2>
            <form onSubmit={handleSubmit(saveEdits)}>
              <h2 className="h2 e-contact_head mg-b-20">Profile info:</h2>
              {/* <h3 className='h2'>Name: </h3><input className='p-b'>{user.name}</p> */}
              <h3 className="h2">Name: </h3>
              <label>
                <input
                  className="input"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder={user.emerName}
                />
                {/* {errors.name && <span>{errors.name.message}</span>} */}
              </label>
              <br />
              {/* <h3 className='h2'>Mail: </h3><p className='p-b'>{user.mail}</p> */}
              <label>
                <h3 className="h2">Telf: </h3>
                <input
                  className="input"
                  type="text"
                  {...register("telf", {
                    required: "Telephone number is required",
                  })}
                  placeholder={user.emerTelf}
                />
                {/* {errors.mail && <span>{errors.mail.message}</span>} */}
              </label>
              <label>
                <h3 className="h2">Mail: </h3>

                <input
                  className="input"
                  type="email"
                  {...register("mail", { required: "Email is required" })}
                  placeholder={user.emerMail}
                />
                {/* {errors.mail && <span>{errors.mail.message}</span>} */}
              </label>
              <br />
              <button className="btt_txt h2" type="submit">
                Save
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
