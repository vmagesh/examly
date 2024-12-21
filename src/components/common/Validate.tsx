interface FormData {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
    IsAccepted?: boolean;
}

export const validate = (data: FormData, type: "signUp" | "login") => {
    const errors: { [key: string]: string } = {};

    // Validate Email
    if (!data.email) {
        errors.email = "Email is Required!";
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            String(data.email).toLowerCase()
        )
    ) {
        errors.email = "Email address is invalid!";
    }

    // Validate Password
    if (!data.password) {
        errors.password = "Password is Required";
    } else if (data.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (type === "signUp") {
        // Validate Name
        if (!data.name?.trim()) {
            errors.name = "Username is Required!";
        }

        // Validate Confirm Password
        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the Password";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Passwords do not match!";
        }

        // Validate Terms Acceptance
        if (!data.IsAccepted) {
            errors.IsAccepted = "Accept terms!";
        }
    }

    return errors;
};
