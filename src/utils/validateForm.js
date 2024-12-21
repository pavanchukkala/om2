// src/utils/validateForm.js

/**
 * Validates a form based on the provided fields and rules.
 * @param {Object} fields - An object containing field names and their values.
 * @param {Object} rules - An object containing validation rules for fields.
 * @returns {Object} - An object with field names as keys and error messages as values (if any).
 */
const validateForm = (fields, rules) => {
    const errors = {};

    Object.keys(rules).forEach((field) => {
        const value = fields[field] || '';
        const fieldRules = rules[field];

        if (fieldRules.required && !value.trim()) {
            errors[field] = `${field} is required.`;
        }

        if (fieldRules.minLength && value.length < fieldRules.minLength) {
            errors[field] = `${field} must be at least ${fieldRules.minLength} characters.`;
        }

        if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
            errors[field] = `${field} must be no more than ${fieldRules.maxLength} characters.`;
        }

        if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
            errors[field] = `${field} is invalid.`;
        }
    });

    return errors;
};

export default validateForm;