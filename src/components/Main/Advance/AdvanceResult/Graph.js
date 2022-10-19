// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLineCanvas } from "@nivo/line";
// make sure parent container have a defined height when usingc
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveLine = ({ data, rangeMax, yRangeMax }) => {
    console.log(data);
  const filteredData = data.map((singleLine) => ({
    ...singleLine,
    data: singleLine.data.filter((d) => d.x < rangeMax)
  }));

  return (
    <ResponsiveLineCanvas
      data={filteredData}
      margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
      xScale={{ type: "linear", min: 0, max: rangeMax }}
      yScale={{ type: "linear", stacked: true, min: 0, max: yRangeMax }}
      yFormat=" >-.2f"
      curve="monotoneX"
      axisTop={null}
      axisRight={{
        tickValues: [0, 10, 50, 200, 500, 1000],
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2s",
        legend: "",
        legendOffset: 0
      }}
      axisBottom={{
        tickValues: [0, 20, 40, 60, 80, 100, 120].filter((v) => v < rangeMax),
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2f",
        legend: "price",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        tickValues: [0, 10, 50, 200, 500, 1000],
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2s",
        legend: "volume",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      enableGridX={false}
      colors={{ scheme: "spectral" }}
      lineWidth={1}
      pointSize={4}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      isinteractive={false}
      gridXValues={[0, 20, 40, 60, 80, 100, 120]}
      gridYValues={[0, 10, 50, 200, 500, 1000]}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 140,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 12,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};