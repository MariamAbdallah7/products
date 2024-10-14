
    'use client'
    import classes from './topNav.module.css'
    import Button from 'react-bootstrap/Button';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
    import FireImage from '../../../assets/1f525.svg fill.svg'
    import Link from 'next/link';

    export default function TopNav() {

        return (
            <>
                <nav className={classes.navbar}>
                    <div >
                        <Link href='/' className={classes.icons}><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link href='/' className={classes.icons}><FontAwesomeIcon icon={faFacebookF} /></Link>
                        <Link href='/' className={classes.icons}><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link href='/' className={classes.icons}><FontAwesomeIcon icon={faYoutube} /></Link>
                    </div>
                    <div className={classes.links}>
                        <div className={classes.inlineContainer}>
                            <FireImage className={classes.FireImage} />
                            <h2 className={classes.h2}>Free shipping on all U.S. orders $50+</h2>
                        </div>
                    </div>
                    <div className={classes.socialMedia}>
                        <a className={classes.noBorderButton}>Login</a>
                        <Button className={classes.button} type="submit">Sign Up</Button>
                    </div>
                </nav>
            </>

        );
    }