import React from 'react';

const Contact = () => {
    return <div className="contact">
            <div className="contact_content">
                <h2>CONTACT US</h2>
                <form action="#" method="POST">
                    <div className="name">
                        <input type="text" name="firstname" placeholder="FIRST NAME"/>
                        <input type="text" name="lastname" placeholder="LAST NAME"/>
                    </div>
                    <input type="email" name="email" placeholder="MAIL ADRESS" className="email"/>
                    <input type="textarea" name="message" placeholder="MESSAGE" className="textarea"/>
                </form>
            </div>
        </div>;
};

export default Contact;