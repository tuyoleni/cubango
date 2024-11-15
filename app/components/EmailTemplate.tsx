import React from "react";
import { Html, Head, Body, Container, Section, Heading, Text } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            margin: "40px auto",
          }}
        >
          {/* Header Section */}
          <Section
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              borderRadius: "8px 8px 0 0",
              padding: "16px",
            }}
          >
            <Heading style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>User Details</Heading>
            <Text style={{ fontSize: "14px", margin: "8px 0 0" }}>
              Below are the details of the user message:
            </Text>
          </Section>

          {/* Body Section */}
          <Section style={{ padding: "24px", backgroundColor: "#ffffff" }}>
            <Heading style={{ fontSize: "16px", color: "#374151", marginBottom: "16px" }}>
              Message Details
            </Heading>
            <Text style={{ color: "#1f2937", margin: "4px 0" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ color: "#1f2937", margin: "4px 0" }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ color: "#1f2937", margin: "4px 0" }}>
              <strong>Message:</strong>
            </Text>
            <Text
              style={{
                backgroundColor: "#f3f4f6",
                padding: "12px",
                borderRadius: "4px",
                color: "#374151",
              }}
            >
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;