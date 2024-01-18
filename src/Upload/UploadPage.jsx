import React, { useState } from 'react';
import './UploadPage.css';
import FileUpload from './FileUpload';
import { uploadPost } from '../services/UploadService';

function UploadPage() {
    const [formData, setFormData] = useState({
        user_id: 1,
        title: '',
        description: '',
        file: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (selectedFile) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            file: selectedFile,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.file != null) {
            console.log('Form data submitted:', JSON.stringify(formData, null, 2));
            console.log(formData);
    
            try {
                const response = await uploadPost(formData);
                console.log(response);
            } catch (error) {
                console.error('Error uploading post:', error);
            }
        } else {
            console.log('No file selected');
            console.log(formData);
        }
        // Send the form data to your backend or perform other actions here
    };

    return (
        <div className="postcontainer formcontainer uploadform">
            <h2>Upload</h2>
            <form className="uploadform" id="postform" onSubmit={handleSubmit}>
                <label className="uploadlabel">Title:</label>
                <br />
                <input
                    className="uploadinput"
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                />
                <br />
                <label className="uploadlabel">Description:</label>
                <br />
                <textarea
                    className="descriptionbox"
                    name="description"
                    maxLength="20000"
                    rows="10"
                    onChange={handleInputChange}
                />
                <br />
                <FileUpload onFileChange={handleFileChange} />
                <button className="horribili-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UploadPage;
