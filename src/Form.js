import React from "react";

const Form = ({ formData, setFormData, stationName, handleStatusChange, handleClose }) => {
    if (stationName === formData.name) {
        return (
            <form>
                <label htmlFor="inputField">Station</label>
                <input id="stationName" value={formData.name} />
                <label htmlFor={formData.id}>Status</label>
                <select className="statusColors" name="status" id={formData.id} value={formData.status} onChange={(e) => { formData.status = e.target.value; setFormData({ ...formData }); }}>
                    <option value="Select">Select</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                </select>
                <label htmlFor={formData.id}>Technician Details</label>
                <input id={formData.id} onChange={(e) => { formData.technicianDetails = e.target.value; setFormData({ ...formData }) }} value={formData.technicianDetails} />
                <div className="buttons">
                    <button className="saveBtn" onClick={handleStatusChange} type="button" id={formData.id}>Save</button>
                    <button type="button" id={formData.id} className="closeBtn" onClick={handleClose}>Cancel</button>
                </div>
            </form>
        )
    } else {
        return null;
    }

}

export default Form;