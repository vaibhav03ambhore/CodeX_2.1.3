import React from "react";

const About = ({ userInfo }) => {
  const { username, email, role, name, address, organization } = userInfo;

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">About</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Username: {username}</p>
          <p className="text-gray-600">Email: {email}</p>
          <p className="text-gray-600">Role: {role}</p>
          <p className="text-gray-600">Name: {name}</p>
          <p className="text-gray-600">Address: {address}</p>
        </div>
        <div>
          <p className="text-gray-600">Organization Name: {organization.name}</p>
          <p className="text-gray-600">Organization Address: {organization.address}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
