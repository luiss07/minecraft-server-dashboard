import PropTypes from "prop-types";
import '@src/styles/globals.css';

const styles = {
    led_box: {
        height: "26px",
        width: "30px",
        margin: "3px 10px",
        float: "left",
    },
    led_frame: {
        margin: "0 auto",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
    },
    greenLed: {
        backgroundColor: "#0F0",
        boxShadow: "0 -1px 7px 1px rgba(0, 0, 0, 0.2), inset #441313 0 -1px 9px, rgba(0, 255, 0, 0.5) 0 2px 12px",
    },
    redLed: {
        backgroundColor: "#F00",
        boxShadow: "0 -1px 7px 1px rgba(0, 0, 0, 0.2), inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px",
    }
};

const LedLight = ( props ) => {
    const { isOn }  = props;
    return (
        <div style={styles.led_box}>
            <div style={(isOn == true) ? {...styles.led_frame, ...styles.greenLed} : {...styles.led_frame, ...styles.redLed}}/>
        </div>
    )
}

LedLight.propTypes = {
    isOn: PropTypes.boolean
};

export default LedLight