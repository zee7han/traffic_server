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
    if (Object.keys(req.headers).includes('Client-Os')) {
        if (validator.isEmpty(req.headers['Client-Os'])) {
            errors.client_os = "Not allowed empty value for the header."
        } else if (req.headers['Client-Os'] === "Traffic-Client") {
            errors.client_os = "Passing the wrong Client-Os."
        }
    } else {
        errors.client_os = "Please pass the default header Client-Os to fulfill your request."
    }

    return errors;

}