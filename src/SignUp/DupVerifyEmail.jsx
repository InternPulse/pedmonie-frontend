import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const email = searchParams.get("email");
    const token = searchParams.get("token");

    useEffect(() => {
        if (email && token) {
            verifyEmail();
        }
    }, [email, token]);

    const verifyEmail = async () => {
        try {
            const response = await axios.post("https://pedmonie-backend.com/api/v1/verify-email", {
                email,
                token
            });

            console.log(response.data);
            alert("Email verified successfully! You can now log in.");
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Verification failed. Please try again.");
        }
    };

    return <h2>Verifying your email...</h2>;
};

export default VerifyEmail;
