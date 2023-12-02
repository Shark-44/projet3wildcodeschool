import "./Progressbar.css"
const Progressbar = ({ passwordStrength }) => {
  const bgcolor = (passwordStrength) => {
    if (passwordStrength === 1) {
      return "red"
    } else if (passwordStrength > 1 && passwordStrength < 4) {
      return "orange"
    } else if (passwordStrength === 4) {
      return "green"
    }
  }
  const Parentdiv = {
    height: "10px",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 10,
  }

  const Childdiv = {
    height: "10px",
    width: `${passwordStrength * 25}%`,
    backgroundColor: bgcolor(passwordStrength),
    borderRadius: 40,
    textAlign: "right",
  }

  const progresstext = {
    color: "black",
    fontWeight: 900,
    fontSize: ".5em",
    top: "50%",
  }

  return (
    <div className="contenairProgress" style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${passwordStrength * 25}%`}</span>
      </div>
    </div>
  )
}

export default Progressbar
