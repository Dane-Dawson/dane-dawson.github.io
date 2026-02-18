const CustomRadarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    
    return (
      <div className="custom-radar-tooltip">
        <p className="tooltip-label">{`${data.subject}: ${data.value}`}</p>
        <p className="tooltip-mod">{data.modifier}</p>
      </div>
    );
  }
  return null;
};

export default CustomRadarTooltip;