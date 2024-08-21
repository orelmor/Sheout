import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">

			<p>C copyrights OL dev 2024</p>

            <div className="download">
            <button>
                <p>apple</p>
                <p>Download on the</p>
                <h4>AppStore</h4>
            </button>
            <button>
            <p>Aroow</p>
                <p>GET IT ON</p>
                <h4>Google Play</h4>

            </button>
            </div>

            <div className="socialMedia">
                <button>F</button>
                <button>I</button>
                <button>X</button>
            </div>
        </div>
    );
}

export default Footer;
