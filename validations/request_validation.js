const validator = require('validator');

module.exports = (req) => {
    let errors = {}
    if (Object.keys(req.body).length > 0) {
        if (validator.isEmpty(req.body.traffic_signal_name)) {
            errors.traffic_signal_name = "Body param traffic_signal_name length cannot be zero."
        }
    } else {
        errors.traffic_signal_name = "Missing body param named traffic_signal_name."
    }
    if (Object.keys(req.body).length > 0) {
        if (validator.isEmpty(req.body.duration)) {
            errors.duration = "Body param duration length cannot be zero."
        }
    } else {
        errors.duration = "Missing body param named duration."
    }
    if (Object.keys(req.headers).includes('client-os')) {
        if (validator.isEmpty(req.headers['client-os'])) {
            errors.client_os = "Not allowed empty value for the header."
        } else if (req.headers['client-os'] !== "Traffic-Client") {
            errors.client_os = "Passing the wrong client-os."
        }
    } else {
        errors.client_os = "Please pass the default header client-os to fulfill your request."
    }

    return errors;

}