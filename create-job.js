require("dotenv").config();

async function createJob() {
  const payload = {
    contact: {
      firstName: "Julia",
      lastName: "Test",
      email: "test@test.com",
      phone: {
        number: "5145555555"
      }
    },
    job: {
      description: "Test job created from API"
    }
  };

  const response = await fetch("https://partner.plannit.io/api/jobs", {
    method: "POST",
    headers: {
      "X-API-KEY": process.env.PLANNIT_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();

  console.log("PAYLOAD SENT:");
  console.log(JSON.stringify(payload, null, 2));
  console.log("STATUS:", response.status);
  console.log("RESPONSE:", text);
}

createJob();