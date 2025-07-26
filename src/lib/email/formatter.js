export const formatFormData = (data, formTitle) => {
  let formattedData = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        New Form Submission: ${formTitle}
      </h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
  `;

  Object.entries(data).forEach(([key, value]) => {
    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    let formattedValue = value;
    if (Array.isArray(value)) {
      formattedValue = value.join(", ");
    } else if (typeof value === "object" && value !== null) {
      formattedValue = JSON.stringify(value, null, 2);
    }

    formattedData += `
      <div style="margin-bottom: 15px; padding: 10px; background-color: white; border-left: 4px solid #007bff;">
        <strong style="color: #495057; display: block; margin-bottom: 5px;">${formattedKey}:</strong>
        <span style="color: #6c757d;">${formattedValue || "Not provided"}</span>
      </div>
    `;
  });

  formattedData += `
      </div>
      <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
        <p style="margin: 0; color: #6c757d; font-size: 14px;">
          <strong>Submission Details:</strong><br>
          Date: ${new Date().toLocaleString()}<br>
          IP: Request IP (if needed)<br>
          User Agent: Request User Agent (if needed)
        </p>
      </div>
    </div>
  `;

  return formattedData;
};
