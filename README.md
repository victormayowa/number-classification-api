# 🔢 Number Classification API

This API classifies numbers based on their mathematical properties and provides a **fun fact** about each number.

## 🚀 Features
- Determines if a number is **prime** or **perfect**.
- Checks if the number is an **Armstrong number**.
- Identifies if the number is **odd** or **even**.
- Computes the **sum of its digits**.
- Fetches a **fun fact** about the number from [Numbers API](http://numbersapi.com/).

## 🛠️ Technology Stack
- **Backend:** NestJS (TypeScript)
- **Framework:** Express.js (via NestJS)
- **Deployment:** Publicly hosted API
- **Version Control:** GitHub

## 🔗 Live API Endpoint
🌍 **Base URL:** `[YOUR_DEPLOYMENT_URL]`

### **📌 API Endpoint**
#### GET `/api/classify-number?number=<your_number>`

### **✅ Example Request**
```sh
curl -X GET "https://your-api.com/api/classify-number?number=371"
```

### ✅ 200 OK (Successful Response)
```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### ❌ 400 Bad Request (Invalid Input)
```
{
    "number": "alphabet",
    "error": true
}
```
