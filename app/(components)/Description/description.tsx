import classes from './description.module.css'
import TopQuality from '../../../assets/topQuality.svg'
import MixMatch from '../../../assets/Mix&Match.svg'
import ShippingWorld from '../../../assets/ShippingWordwide.svg'

export default function Description() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.firstDiv}>
                    <TopQuality />
                    <h6 className={classes.firsText1}>  Top quality
                        <br />
                        <p className={classes.firsText2}> Lorem ipsum det, consec tetur adipiscing elit duis nec fringi</p>
                    </h6>
                </div>

               
                <div className={classes.firstDiv}>
                    <MixMatch />
                    <h6 className={classes.firsText1}>  Mix and match
                        <br />
                        <p className={classes.firsText2}> Lorem ipsum det, adipiscing elit duis nec fringi consec tetur</p>
                    </h6>

                </div>

                {/*  */}


                <div className={classes.firstDiv}>
                    <ShippingWorld />
                    <h6 className={classes.firsText1}> Shipping worldwide

                        <br />
                        <p className={classes.firsText2}>Lorem ipsum det, duis nec fringi consec tetur adipiscing elit</p>
                    </h6>
                </div>
            </div></>
    )
}