const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold mb-2">{payload[0].payload.name}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}:{" "}
              {entry.name === "Revenue"
                ? `RWF ${entry.value.toLocaleString()}`
                : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };


  export default CustomTooltip