import { useState } from "react";
export default function App() {
  return (
    <div>
      <TextExpander>
        It's not only writers who can benefit from this free online tool. If
        you're a programmer who's working on a project where blocks of text are
        needed, this tool can be a great way to get that. It's a good way to
        test your programming and that the tool being created is working well.
        Above are a few examples of how the random paragraph generator can be
        beneficial. The best way to see if this random paragraph picker will be
        useful for your intended purposes is to give it a try. Generate a number
        of paragraphs to see if they are beneficial to your current project. If
        you do find this paragraph tool useful, please do us a favor and let us
        know how you're using it. It's greatly beneficial for us to know the
        different ways this tool is being used so we can improve it with
        updates. This is especially true since there are times when the
        generators we create get used in completely unanticipated ways from when
        we initially created them. If you have the time, please send us a quick
        note on what you'd like to see changed or added to
      </TextExpander>
      <TextExpander
        collapsedNumWords={30}
        expandButtonText="show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
      >
        It was just a burger. Why couldn't she understand that? She knew he'd
        completely changed his life around her eating habits, so why couldn't
        she give him a break this one time? She wasn't even supposed to have
        found out. Yes, he had promised her and yes, he had broken that promise,
        but still in his mind, all it had been was just a burger.
      </TextExpander>
      <TextExpander expanded={true} className="box">
        Device Recommendation: Use a PC for the best experience. Mobile devices
        may not offer full compatibility. Duration: The quiz lasts 25 minutes,
        covering Python, SQL, Maths, and Statistics in separate sections.
        Network Check: Ensure your internet connection is stable throughout the
        quiz to avoid disruptions. Preparation: Have paper and pen ready for
        calculations, especially for Maths and Statistics sections.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "blue",
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonColorStyle = {
    color: buttonColor,
    backround: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "8px",
    font: "inherit",
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpanded((exp) => !exp)}
        style={buttonColorStyle}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
