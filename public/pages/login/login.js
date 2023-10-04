import { API_URL } from "../utils/settings.js";
import { fetchPostJsonFormData } from "../utils/utils.js";

document.addEventListener("DOMContentLoaded", function () {
    let initialized = false;
    init();

    async function init() {
        const form = document.querySelector("#form");
        const resultContainer =
            document.getElementById("result");
        if (!initialized) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
                console.log("Tried to log in");
                try {
                    const response = await fetchPostJsonFormData(API_URL + "login", form);
                    console.log("api/login response:", response);
                    if (response.data !== undefined) {
                        resultContainer.innerText = "Logged in successfully:";
                        window.location.href = "/";
                    } else {
                        if (response.message !== undefined) {
                            resultContainer.innerText = response.message;
                        } else {
                            resultContainer.innerText = "Bad credentials";
                        }
                    }
                } catch (error) {
                    resultContainer.innerText = error.message;
                }
            });
            initialized = true;
        }
    }
});