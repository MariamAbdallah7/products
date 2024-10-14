import classes from './heroSection.module.css'
import Button from 'react-bootstrap/Button';

export default function HeroSection() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.firstImage}>
                    <h6 className={classes.firstImageText1}>T-shirt printing <br /> made easy.</h6>
                    <p className={classes.firstImageText2}>Create your design <br /> for your online business</p>
                    <Button className={classes.firstImageButton} type="submit">Create a T-shirt</Button>
                </div>
                <div className={classes.secondImage}>
                    <h6 className={classes.secondImageText1}>Bring your ideas <br /> to life in minute</h6>
                    <p className={classes.secondImageText2}>Print shirts for yourself or your <br /> creative works</p>
                    <Button className={classes.secondImageButton} type="submit">Shop Now</Button>
                </div>
            </div>




        </>
    )
}