// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLineCanvas } from "@nivo/line";
// make sure parent container have a defined height when usingc
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveLine = ({endValue, initialPrice, data, rangeMax, yRangeMax }) => {
    console.log(rangeMax, yRangeMax);
  // const filteredData = data.map((singleLine) => ({
  //   ...singleLine,
  //   data: singleLine.data.filter((d) => d.x < rangeMax)
  // }));

  console.log(rangeMax, yRangeMax);
  const theme = {
    axis: {
      textColor: '#eee',
      fontSize: '30px',
      tickColor: '#eee',
    }}

  return (
    <ResponsiveLineCanvas
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      theme={theme}
      xScale={{ type: "linear", min: '0', max: rangeMax }}
      yScale={{ type: "linear", min: '0', max: (yRangeMax * 1.2),reverse: false}}
      yFormat=" >-.2f"
      // curve="monotoneX"
      axisTop={null}
      axisRight={{
        // tickValues: [10,20,30,40,50,60,70,80,90].filter((v)=> v < yRangeMax),
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2s",
        legend: "",
        legendOffset: 0
      }}
      axisBottom={{
        // tickValues: [1,2,3,4,5,6,7,8,9].filter((v) => v < rangeMax),
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".1f",
        legend: "años",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        // tickValues: [1,2,3,4,5,6,7,8,9].filter((v)=> v < yRangeMax),
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".1s",
        legend: "€",
        legendOffset: -30,
        legendPosition: "middle"
      }}
      enableGridY={false}
      enableGridX={false}
      colors={{ scheme: 'accent' }}
      lineWidth={3}
      pointSize={8}
      pointColor="#24b2f9"
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}  
      areaBaselineValue={0}
      areaBlendMode="difference"
      areaOpacity={0.4}    
      useMesh={true}
      isInteractive={false}
      gridXValues={[0, 20, 40, 60, 80, 100, 120]}
      gridYValues={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
      legends={[
        {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 25,
            translateY: -36,
            itemWidth: 100,
            itemHeight: 36,
            itemsSpacing: 50,
            symbolSize: 20,
            symbolShape: 'circle',
            itemDirection: 'left-to-right',
            itemTextColor: '#777',
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