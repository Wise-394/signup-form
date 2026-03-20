class View {
    static init() {
        // email,country, postal password, repeat-password
        const email = document.querySelector("#email")
        email.addEventListener("input", () => {
            email.classList.add("touched")
            Validator.validateEmail(email)
        })
        email.addEventListener("input", () => Validator.validateEmail(email))

        const country = document.querySelector("#country")
        country.addEventListener("input", () => {
            country.classList.add("touched")
            Validator.validateCountry(country)
        })
        country.addEventListener("input", () => Validator.validateCountry(country))

        const postal = document.querySelector("#postal")
        postal.addEventListener("input", () => {
            postal.classList.add("touched")
            Validator.validatePostal(postal)
        })
        postal.addEventListener("input", () => Validator.validatePostal(postal))

        const password = document.querySelector("#password")
        password.addEventListener("input", () => {
            password.classList.add("touched")
            Validator.validatePassword(password)
        })
        password.addEventListener("input", () => Validator.validatePassword(password))

        const repeatPassword = document.querySelector("#repeat-password")
        repeatPassword.addEventListener("input", () => {
            repeatPassword.classList.add("touched")
            Validator.validateRepeatPassword(repeatPassword)
        })
        repeatPassword.addEventListener("input", () => Validator.validateRepeatPassword(repeatPassword))
    }

    static editValidationText(type, text) {
        switch (type) {
            case "email": {
                const container = document.querySelector(".email-container")
                const span = document.querySelector(".email-span")
                this.#editSpan(container, span, "email-span", text)
                break
            }
            case "country": {
                const container = document.querySelector(".country-container")
                const span = document.querySelector(".country-span")
                this.#editSpan(container, span, "country-span", text)
                break;
            }
            case "postal": {
                const container = document.querySelector(".postal-container")
                const span = document.querySelector(".postal-span")
                this.#editSpan(container, span, "postal-span", text)
                break;
            }
            case "password": {
                const container = document.querySelector(".password-container")
                const span = document.querySelector(".password-span")
                this.#editSpan(container, span, "password-span", text)
                break;
            }
            case "repeatPassword": {
                const container = document.querySelector(".repeat-password-container")
                const span = document.querySelector(".repeat-password-span")
                this.#editSpan(container, span, "repeat-password-span", text)
            }

        }
    }

    static #editSpan(container, span, spanClass, text) {
        if (text == "" && span) {
            container.removeChild(span)
            return
        }

        if (!span) {
            span = document.createElement("span")
            span.classList.add(spanClass)
            container.appendChild(span)
        }

        span.textContent = text
    }
}

class Validator {
    static validateEmail(email) {
        if (!email.value) {
            View.editValidationText("email", "Email is required")
            email.setCustomValidity("Email is required")
        } else if (email.validity.typeMismatch) {
            View.editValidationText("email", "Must be an Email")
            email.setCustomValidity("Must be an Email")
        } else {
            View.editValidationText("email", "")
            email.setCustomValidity("")
        }
    }

    static validateCountry(country) {
        if (!country.value) {
            View.editValidationText("country", "Country is required")
            country.setCustomValidity("Country is required")
        } else if (country.validity.tooShort) {
            View.editValidationText("country", "Must be a valid Country")
            country.setCustomValidity("Must be a valid Country")
        } else {
            View.editValidationText("country", "")
            country.setCustomValidity("")
        }
    }

    static validatePostal(postal) {
        if (!postal.value) {
            View.editValidationText("postal", "Postal code is required")
            postal.setCustomValidity("Postal code is required")
        } else if (postal.validity.tooShort) {
            View.editValidationText("postal", "Enter a postal code")
            postal.setCustomValidity("Enter a postal code")
        } else {
            View.editValidationText("postal", "")
            postal.setCustomValidity("")
        }
    }

    static validatePassword(password) {
        if (!password.value) {
            View.editValidationText("password", "Password is required")
            password.setCustomValidity("Password is required")
        } else if (password.validity.tooShort) {
            View.editValidationText("password", "Password must be larger than 8 digits")
            password.setCustomValidity("Password must be larger than 8 digits")
        } else {
            View.editValidationText("password", "")
            password.setCustomValidity("")
        }
    }

    static validateRepeatPassword(repeatPassword) {
        const password = document.querySelector("#password")
        if (!repeatPassword.value) {
            View.editValidationText("repeatPassword", "Please repeat your password")
            repeatPassword.setCustomValidity("Please repeat your password")
        } else if (password.value != repeatPassword.value) {
            View.editValidationText("repeatPassword", "Password doesn't match")
            repeatPassword.setCustomValidity("Password doesn't match")
        } else {
            View.editValidationText("repeatPassword", "")
            repeatPassword.setCustomValidity("")
        }
    }
}

View.init()