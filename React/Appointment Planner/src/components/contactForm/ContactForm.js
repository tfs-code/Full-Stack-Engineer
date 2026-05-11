import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contact name"
                required
            />
            <input
                type="text"
                value={phone}
                pattern="^(\+44\s?7\d{3}|0[0-9]{3,4})\s?[0-9]{3}\s?[0-9]{3,4}$"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contact phone (UK: 02X XXXX XXXX or +447XXX XXXXXX)"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contact email"
                required
            />
            <input type="submit" value="Add contact" />
        </form>
    );
};
