const SlideArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f7e0b2",
        margin: "0 25px 0 12px",
        borderRadius: "20px",
        padding: "2px 1px 0.25px 1px",
        zIndex: "4"
      }}
      onClick={onClick}
    />
  );
};

export default SlideArrow;
