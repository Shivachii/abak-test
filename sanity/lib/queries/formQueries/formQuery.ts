export const CONTACT_FORM_QUERY = `*[_type == "contactForm" && _id == $formId]{
  title,
  showtitle,
  _id,
  id,
  class,
  fields[]{
    label,
    name,
    type,
    isRequired,
    helpText,
    note,
    showPlaceholder,
    selectOptions,
    placeholder,
    radioOptions,
    checkboxOptions,
    options[]{
      value,
      label
    },
  },
  submitButtonText
}[0]`;

export const CONTACT_FORM_SETTINGS_QUERY = `*[_type == "formGeneralSettings"][0]{
  adminEmail,
  successMessage,
  confirmationSubject,
  confirmationMessage,
  recaptchaEnabled,
  recaptchaSiteKey,
  recaptchaSecretKey,
  smtpUsername,
  smtpPassword
}`;
