import React from "react";

import { Input, Label } from "reactstrap";
const CreateUser = ({ user, onChangeForm, createUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create Event</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-12">
                <Label htmlFor="exampleInputEvent1">Event</Label>
                <Input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="Event"
                  value={user.event}
                  id="Event"
                  aria-describedby="EventHelp"
                  placeholder="Event"
                />
                <Label htmlFor="resume">Cover Image</Label>
                <Input
                  type="file"
                  className="form-control"
                  id="resume"
                  multiple
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createUser()}
              className="btn btn-danger"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
