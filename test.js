const API_KEY = "3qj6is6gq9nh1ku8kl0w7zlelej56m";

async function testEndpoint(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  console.log("\nURL:", url);
  console.log("STATUS:", response.status);
  console.log(JSON.stringify(data, null, 2));
}

testEndpoint("https://partner.plannit.io/api/services");