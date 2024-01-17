import "./UploadPage.css";
import FileUpload from "./FileUpload"
import { useState } from "react";

function UploadPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the form data here, like sending it to a server
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="postcontainer formcontainer uploadform">
            <h2>Upload</h2>
            <form className="uploadform" id="postform" onSubmit={handleSubmit}>
                <label className="uploadlabel">
                    Title:
                </label>
                <br />

                <input
                    className="uploadinput"
                    type="text"
                    name="title"
                />
                <br />
                <label className="uploadlabel">
                    Description:
                </label>
                <br />
                <textarea
                    className="descriptionbox"
                    name="description"
                    maxLength="20000"
                    rows="10"
                />

                <br />
            </form>

            <FileUpload />
            <button className="horribili-button" type="submit">Submit</button>
        </div>
    )
}

export default UploadPage