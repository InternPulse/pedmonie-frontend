# Read this to see sample usage of the axios instance for PedMonie app.

## Configuration
The API URLs have been stored in environment variables (.env file for security and best practice). 

## File Structure
- **apiUrls.js** – Stores the API base URLs.
- **apiRequest.js** – Creates an Axios instance for each API.

## Usage
Import the specific API instance and use it with `useEffect` and `async/await`:

```javascript
import { useEffect, useState } from "react";
import { nodeAPI, djangoAPI, csharpAPI } from "./apiRequest";

const fetchNodeData = async () => {
    try {
        const response = await nodeAPI.get("/users");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const fetchDjangoData = async () => {
    try {
        const response = await djangoAPI.post("/login", { username: "test", password: "1234" });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const fetchCSharpData = async () => {
    try {
        const response = await csharpAPI.get("/products");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const MyComponent = () => {
    useEffect(() => {
        fetchNodeData();
        fetchDjangoData();
        fetchCSharpData();
    }, []);

    return <div>Welcome to PedMonie</div>;
};

export default MyComponent;
```

## Creating Custom API Instances
If you need to create an instance dynamically, use the `createAPI` function:

```javascript
import createAPI from "./apiRequest";
import { useEffect } from "react";

const customAPI = createAPI("node_api");

const fetchCustomData = async () => {
    try {
        const response = await customAPI.get("/custom-endpoint");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const CustomComponent = () => {
    useEffect(() => {
        fetchCustomData();
    }, []);

    return <div>Welcome to PedMonie</div>;
};

export default CustomComponent;
```

## Notes
- Requests include credentials (`withCredentials: true`), ensuring cookies/tokens work properly.

