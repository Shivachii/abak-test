export const getEmailTemplate = (formCategory) => {
  const templates = {
    Contact: {
      subject: "New Contact Form Submission",
      adminMessage: "A new contact form has been submitted.",
      userMessage:
        "Thank you for contacting us! We will get back to you within 24 hours.",
    },
    Volunteer: {
      subject: "New Volunteer Application",
      adminMessage: "A new volunteer application has been received.",
      userMessage:
        "Thank you for your interest in volunteering! We will review your application and contact you soon.",
    },
    Qardh: {
      subject: "New Qardh Application",
      adminMessage: "A new Qardh application has been submitted.",
      userMessage:
        "Thank you for your Qardh application. We will review it and get back to you within 3-5 business days.",
    },
    AESP: {
      subject: "New AESP Form Submission",
      adminMessage: "A new AESP form has been submitted.",
      userMessage:
        "Thank you for your AESP submission. We have received your information.",
    },
  };

  return templates[formCategory] || templates.Contact;
};
