import { useState } from "react";

export default function App() {
  const [showCv, setShowCv] = useState(false);
  const [cvData, setCvData] = useState(null);

  function handleShowCv(data) {
    setCvData(data);
    setShowCv(true);
  }

  return (
    <div className="app">
      <h1>CV maker</h1>
      {!showCv ? (
        <FormToTheInfo onSubmitCv={handleShowCv} />
      ) : (
        <CvDisplay data={cvData} onBack={() => setShowCv(false)} />
      )}
    </div>
  );
}

function FormToTheInfo({ onSubmitCv }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    about: "",
    collegeName: "",
    levelOfStudy: "",
    fieldOfStudy: "",
    startDate: "",
    graduationDate: "",
    educationDescription: "",
    companyName: "",
    position: "",
    workDescription: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitCv(formData);
  };

  function handleAddMore(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="personal-info">
        <h1>Personal info</h1>
        <label>enter your full name</label>
        <input
          required
          type="text"
          name="fullName"
          placeholder="full name"
          value={formData.fullName}
          onChange={handleChange}
        ></input>
        <label>enter your email</label>
        <input
          required
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>enter your phone number</label>
        <input
          required
          type="text"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>enter your message</label>
        <textarea
          required
          placeholder="add some thing about u"
          name="about"
          rows={7}
          value={formData.about}
          onChange={handleChange}
        />
      </div>

      <div className="educationInfo">
        <h1>education</h1>
        <label>collage name</label>
        <input
          required
          type="text"
          name="collegeName"
          placeholder="colage name"
          value={formData.collegeName}
          onChange={handleChange}
        />
        <label>level of study</label>
        <select
          required
          name="levelOfStudy"
          value={formData.levelOfStudy}
          onChange={handleChange}
        >
          <option value="degree">degree</option>
          <option value="under graguate">under graguate</option>
          <option value="bachelor's degree">bachelor's degree</option>
          <option value="master's degree">master's degree</option>
          <option value="doctorate degree">doctorate degree</option>
        </select>
        <label>field of study</label>
        <input
          required
          type="text"
          name="fieldOfStudy"
          placeholder="field of study"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />

        <label>starting date</label>
        <input
          required
          type="date"
          name="startDate"
          placeholder="starting date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <label>graduation date</label>
        <input
          required
          type="date"
          name="graduationDate"
          placeholder="graduation date"
          value={formData.graduationDate}
          onChange={handleChange}
        />
        <textarea
          required
          placeholder="add some additional thing u wanna add  about your education"
          rows={7}
          name="educationDescription"
          value={formData.educationDescription}
          onChange={handleChange}
        />
      </div>
      <div className="workExperience">
        <h1>work experience</h1>
        <label>company name</label>
        <input
          required
          type="text"
          name="companyName"
          placeholder="company name"
          value={formData.companyName}
          onChange={handleChange}
        />
        <label>position</label>
        <input
          required
          type="text"
          name="position"
          placeholder="position"
          value={formData.position}
          onChange={handleChange}
        />

        <textarea
          required
          placeholder="add some additional thing u wanna add  about your work experience"
          rows={7}
          name="workDescription"
          value={formData.workDescription}
          onChange={handleChange}
        />
        <button className="addMore" onClick={handleAddMore}>
          add more
        </button>
      </div>

      <button type="submit" className="button">
        submit
      </button>
    </form>
  );
}

function CvDisplay({ data, onBack }) {
  return (
    <>
      <div className="cvdisplay">
        <h2 className="cvname">{data.fullName}</h2>
        <p>📧{data.email}</p>
        <p>📞{data.phone}</p>
        <hr></hr>
        <div className="aboutme">
          <h3>about me</h3>
          <p>{data.about}</p>
        </div>
        <hr></hr>
        <h3 className="educationCv">education</h3>
        <p className="educationCvp ">
          {data.levelOfStudy} in {data.fieldOfStudy} at {data.collegeName}
        </p>
        <p>starting date: {data.startDate}</p>
        <p>Graduation date: {data.graduationDate} </p>
        <hr></hr>
        <div class="workoncv">
          <h3> work Experience</h3>
          <p className="company">💪{data.companyName}</p>
          <p className="position"> position: {data.position}</p>
          <p className="workdescription">{data.workDescription}</p>
        </div>
      </div>
      <button className="backbtn" onClick={onBack}>
        back
      </button>
    </>
  );
}
