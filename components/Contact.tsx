import React from 'react';
import { scrollToEle } from '../utils/scroll';
import { useForm, ValidationError } from '@formspree/react';
import * as Scroll from 'react-scroll';
import styles from '../styles/Contact.module.scss';

function ContactForm() {
    const [state, handleSubmit] = useForm("xlezgvjj");
    if (state.succeeded) {
        return (
            <div className={styles.submitResult}>
                <p>Thanks for your message !</p>
            </div>
        );
    }
    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <label className={styles.contact_name}>
                <span>Name :</span>
                <input className={styles.name} id="name" type="text" name="name" required />
                <ValidationError
                    prefix=""
                    field="name"
                    errors={state.errors}
                />
            </label>
            <label className={styles.contact_company_name}>
                <span>Company name :</span>
                <input className={styles.companyName} id="companyName" type="text" name="companyName" />
                <ValidationError
                    prefix=""
                    field="companyName"
                    errors={state.errors}
                />
            </label>
            <label className={styles.contact_email}>
                <span>Email :</span>
                <input className={styles.email} id="email" type="text" name="email" required />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </label>
            <label className={styles.contact_message}>
                <span>Message :</span>
                <textarea className={styles.message} id="message" name="message" required></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </label>
            <button
                disabled={state.submitting}
                className={styles.submitBtn}
                type="submit">Send</button>

            {/* <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button> */}
        </form>
    );
}

export default function Contact() {

    const scrollToTop = () => {
        Scroll.animateScroll.scrollToTop({
            duration: 500,
            delay: 100,
            smooth: true,
        })
    }

    return (
        <div
            className={styles.contactDiv}
        >
            <h2
                onClick={() => scrollToEle('contact')}
            >Contact</h2>
            <div className={styles.contactSectionMainDiv}>
                <p className={styles.description}>If you have something to talk to me, feel free to get in touch with me.I&apos;m waiting for your kind email!</p>
                <div className={styles.form_div}>
                    <ContactForm />
                    {/* <form className={styles.contact_form} action='POST'>
                        <label className={styles.contact_name}>
                            <span>Name :</span>
                            <input className={styles.name} type="text" name="name" required />
                        </label>
                        <label className={styles.contact_company_name}>
                            <span>Company name :</span>
                            <input className={styles.companyName} type="text" name="companyName" />
                        </label>
                        <label className={styles.contact_email}>
                            <span>Email :</span>
                            <input className={styles.email} type="text" name="email" required />
                        </label>
                        <label className={styles.contact_message}>
                            <span>Message :</span>
                            <textarea className={styles.message} name="message" required></textarea>
                        </label>
                        <button className={styles.submitBtn} type="submit">Send</button>
                    </form> */}

                </div>
            </div>
            <div
                onClick={scrollToTop}
                className={styles.nextSection}>
                Go Back To Top{' '}
                <span
                    className={styles.rotateAni}>
                    {'<<'}
                </span>
            </div>
        </div>
    )
}
