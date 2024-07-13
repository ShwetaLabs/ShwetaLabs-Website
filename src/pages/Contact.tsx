import { useState } from "react";
import { contactData } from "../data/contact";
import { DataService } from "../services/dataService";

export function Contact(): JSX.Element {
  //form elements be careful.
  return (
    <div
      className="row"
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <div className="col" style={{ alignItems: "flex-start" }}>
        <p key={contactData.title} className="title">
          {contactData.title}
        </p>
        <p key={contactData.description}>{contactData.description}</p>
      </div>
      <div className="col" style={{width:'35%'}}>
        <Form form={contactData.form} />
      </div>
    </div>
  );
}
interface IFormSpec {
  form: typeof contactData.form;
}
function Form({ form }: IFormSpec): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const sendData = () => {
    const dataService = new DataService();
    dataService.postContactUsForm(firstName, lastName, emailAddress, message);
  };
  return (
    <div className="col">
      <div className="row" style={{}}>
        <Field
          title={form.firstName.title}
          placeholder={form.firstName.placeholder}
          value={firstName}
          setValue={setFirstName}
        />
        <Field
          title={form.lastName.title}
          placeholder={form.lastName.placeholder}
          value={lastName}
          setValue={setLastName}
        />
      </div>
      <Field
        title={form.emailAddress.title}
        placeholder={form.emailAddress.placeholder}
        value={emailAddress}
        setValue={setEmailAddress}
      />
      <Field
        title={form.message.title}
        placeholder={form.message.placeholder}
        value={message}
        setValue={setMessage}
        height={167}
      />
      <a className="button2 pointable" onClick={sendData} style={{ marginTop: "32px"}}>
        Submit
      </a>
    </div>
  );
}
interface IFieldSpec {
  title: string;
  placeholder: string;
  value: any;
  setValue: any;
  height?: number;
}
function Field({
  title,
  placeholder,
  value,
  setValue,
  height,
}: IFieldSpec): JSX.Element {
  const heightStyle = height ? { height: height.toString() + "px" } : {};
  return (
    <div className="col" style={{ alignItems: "stretch",marginInlineEnd:'16px',flexGrow:1 }}>
      <p className="field title">{title}</p>
      {height && height > 0 ? (
        <textarea
          className="field input"
          placeholder={placeholder}
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          style={{ ...heightStyle, textAlign: "start" }}
        />
      ) : (
        <input
          className="field input"
          placeholder={placeholder}
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
      )}
    </div>
  );
}