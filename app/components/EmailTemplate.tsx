import React from "react";

const EmailTemplate = ({ name, email, message }:{name:string, email:string, message: string}) => {
  return (
    <div className="bg-gray-100 p-8 rounded-md">
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Message Details:</h3>
        <p className="text-gray-700">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-gray-400">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-400">
          <strong>Message:</strong> {message}
        </p>
      </div>
    </div>
  );
};

export default EmailTemplate;